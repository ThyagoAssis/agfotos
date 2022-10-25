import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  title = "Minhas Fotos";
  fotos: Object[] = [];

  constructor(http: HttpClient) {
    http.get<Object[]>('http://localhost:3000/fotos/').subscribe(caixa => {this.fotos = caixa, console.log(caixa)});
    }

  ngOnInit(): void {
  }



}
