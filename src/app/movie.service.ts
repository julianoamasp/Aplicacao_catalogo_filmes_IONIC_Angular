import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private aula = "books?bibkeys=ISBN:9780345339706,ISBN:9780439064873,ISBN:9780735223523,ISBN:9780525521426&format=json&details=true";

  constructor(public http: Http) {

  }

  getTeste(){
    return this.http.get('https://openlibrary.org/api/'+this.aula);
  }

}
