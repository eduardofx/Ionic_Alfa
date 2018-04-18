import { Http } from "@angular/http";
import { Injectable } from '@angular/core';


@Injectable()
export class ListaProvider {

  url = "https://raw.githubusercontent.com/eduardofx/Ionic_Alfa/master/cidade.json";
  
  constructor(public http: Http) {this.buscaLista()}
  
  buscaLista(){
    return this.http.get(this.url);
  }

}
