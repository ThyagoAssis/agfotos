import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Foto } from "../fotografia/foto/foto";

@Injectable({
    providedIn: 'root'
})
export class DataBaseService{

    httpOptions = {
        headers: new HttpHeaders({'Content-Type' : 'application/json'})
      }
    
    constructor(private http: HttpClient){}

    readonly API = "http://localhost:3000/fotos";

    getFoto(){
        return this.http.get<Foto[]>(this.API);
    }

    postFoto(valor:any){
        this.http.post(this.API, JSON.stringify(valor.value), this.httpOptions).subscribe();
    }

}