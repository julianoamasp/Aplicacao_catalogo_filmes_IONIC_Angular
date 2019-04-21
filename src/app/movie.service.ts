import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseApiPath =  'https://api.themoviedb.org/3';

  constructor(public http: Http) { 


  }
  
  getLatestMovies(){
    return this.http.get(this.baseApiPath + '/movie/lastest?api_key=' + this.getApiKey());
  }

  getPopularMovies() {
    return this.http.get(this.baseApiPath + '/movie/popular?api_key='
    + this.getApiKey());
    }

    getApiKey(): string{
      return 'a7316168c455f688b8b3cfc8894647db2';
    }
}
