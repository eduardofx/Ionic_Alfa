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

  constructor(public navCtrl: NavController) {

  }

  calcula(){
    this.resultado = parseInt(this.valor1) + parseInt(this.valor2);
  }

}
