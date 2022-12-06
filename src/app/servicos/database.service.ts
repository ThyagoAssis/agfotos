import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Foto } from '../fotografia/foto/foto';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly API = 'http://localhost:3000/fotos/';

  //Tradutor 
  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };  

  constructor(private http: HttpClient) { }

  //Capiturar as fotos
  getFotos(){
    return this.http.get<Foto[]>(this.API);
  }

  //Metodo para cadastrar fotos
  //JSON.stringify(foto) - Converte os dados para formato json
  postFotos(foto: Foto){
    return this.http.post(this.API, JSON.stringify(foto), this.HttpOptions).subscribe();
  }

  //Metodo de apagar
  delFotos(id: number){
    return this.http.delete(this.API + id).subscribe();
  }

}
