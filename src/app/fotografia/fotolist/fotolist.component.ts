import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';

@Component({
  selector: 'app-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent implements OnInit {

  
  fotos: Foto[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
    .get<Foto[]>('http://localhost:3000/fotos/')
    .subscribe(
      caixa => this.fotos = caixa,
      /* err => console.log(err.message )*/
      );
  }

}
