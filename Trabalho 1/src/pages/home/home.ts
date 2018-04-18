import { ListaProvider } from './../../providers/lista/lista';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  valor1:number =0 ;
  valor2:number =0;
  resultado:number =0 ;
  lista = [];


  constructor(public navCtrl: NavController,
    private listaProvider:ListaProvider) {

  }

  calcula(){
    this.resultado = this.valor1*this.valor2;
  }

  carregarLista(){
    this.listaProvider.buscaLista().subscribe(result => {
      this.lista = JSON.parse(result['_body']);

    } );
  }

  excluirItem(item){
    this.lista.splice(item,1);
  }

}
