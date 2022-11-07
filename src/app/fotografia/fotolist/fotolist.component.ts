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

  constructor(private database: DataBaseService){ }

  ngOnInit(): void {
    this.database.getFoto().subscribe(results => this.fotos = results)
  }
}