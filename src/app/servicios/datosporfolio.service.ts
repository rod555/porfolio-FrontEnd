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
     return this.http.get('./assets/data/mockdatos.json');
  }


}
