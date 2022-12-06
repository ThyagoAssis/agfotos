import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicos/database.service';


@Component({
  selector: 'app-fotoform',
  templateUrl: './fotoform.component.html',
  styleUrls: ['./fotoform.component.css']
})
export class FotoformComponent implements OnInit {

  constructor(
      private banco: DatabaseService,
      private router: Router
    ) { }

  ngOnInit(): void {
  }

  submit(valor:any){
    this.banco.postFotos(valor.value);
    this.router.navigate(['/foto']);
  }
}
