import { Component, Input, OnInit } from '@angular/core';
import { Foto } from '../../foto/foto';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  @Input() fotos: Foto[] = [];
  rows = [];
  constructor() { }

  ngOnInit(): void {
  }

}
