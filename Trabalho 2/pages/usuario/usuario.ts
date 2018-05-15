import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { EmailValidator } from './../../validators/email';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  usuarioForm: FormGroup;
  home = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, private authProvider:AuthProvider) {
      this.usuarioForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required,
        EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6),
        Validators.required])]
      });
  }
  salvarUsuario(){
    if (!this.usuarioForm.valid) {
      alert('preencha todos os campos');
    } else {
      this.authProvider.signupUser(this.usuarioForm.value.email, this.usuarioForm.value.password);
      alert('salvo');
      this.voltarPagina();
    }
  }

  voltarPagina(){
    this.navCtrl.setRoot(HomePage);
  }

}
