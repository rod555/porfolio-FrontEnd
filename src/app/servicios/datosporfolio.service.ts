import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosporfolioService {

  constructor(private http:HttpClient) { }

  get_nombre():Observable<any>{

      //text: String;
      //text="m";
      //const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
      //console.log(this.http.get('https://porfolio-backend-xy7f.onrender.com/'));
       return this.http.get('https://porfolio-backend-xy7f.onrender.com/');

  }
}

/*
  return this.http.get('./assets/data/mockdatos.json');
  */

