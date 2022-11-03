import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Foto } from './foto';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  title = "Minhas Fotos";
  

  @Input() img = "";
  @Input() titulo = "";
  @Input() desc = ""

 
  ngOnInit(): void {
  }



}
