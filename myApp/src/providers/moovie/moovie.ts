import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {  //vai ser inserido e compartilhado com todo app.
  private baseApiPath = "https://api.themoviedb.org/3"
  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatstMovies() { //Observable<Response>
    return this.http.get(this.baseApiPath +"/movie/latest")  //DRY = não se repita o codigo.
  }
}
