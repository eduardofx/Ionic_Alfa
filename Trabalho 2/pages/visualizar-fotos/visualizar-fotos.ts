import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FotosProvider } from '../../providers/fotos/fotos';
import { IncluiFotoPage } from '../inclui-foto/inclui-foto';


/**
 * Generated class for the VisualizarFotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar-fotos',
  templateUrl: 'visualizar-fotos.html',
})
export class VisualizarFotosPage {

  local: any = {};
  fotosmostrar = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fotosProvider:FotosProvider,
    public alertCtrl: AlertController) {
      // recupera os dados da view anterior
    this.local = this.navParams.data;
    /* aqui fazemos a query para mostrar somente as fotos do local
    podemos usar esse metodo para qualquer tipo de filtro, passando o campo que quer buscar
    e o valor do campo no segundo atributo.
    como usaremos o recurso real time database do firebase, ele retorna um observable, usando
    subscribe inserimos os dados na nossa lista e alterando no banco de dados automaticamente
    irá mudar a lista de todos os usuarios online
    */
    this.fotosProvider.getByQuery('idlocal', this.local.payload.key).subscribe(resp => this.fotosmostrar = resp);


  }

  comentar(foto: any) {
    let prompt = this.alertCtrl.create({
      title: 'Comentário',
      message: "Escreva seu comentário da foto",
      inputs: [
        {
          name: 'comentario',
          placeholder: 'Comentário'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Fechoooo');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            this.salvarComentario(data.comentario, foto);
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }

  private salvarComentario(comentario: string, foto: any) {
    this.fotosProvider.inserirComentario(foto, comentario);
  }

  incluirFoto(){
    // passamos o parametro do local para o proxima view e abrimos a pagina de incluir fotos
    this.navParams.data = this.local;
    this.navCtrl.push(IncluiFotoPage, this.navParams);
  }

  voltarPagina(){
    this.navCtrl.pop();
  }

}
