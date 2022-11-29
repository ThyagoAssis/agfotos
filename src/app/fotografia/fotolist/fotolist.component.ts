import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/servicos/database.service';
import { Foto } from '../foto/foto';

@Component({
  selector: 'app-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent implements OnInit {
  
  fotos: Foto[] = [];

  constructor(private httpClient: HttpClient){ }

  ngOnInit(): void {
    this.httpClient.get<Foto[]>('http://localhost:3000/fotos').subscribe(results => this.fotos = results);
  }
}