import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/servicos/database.service';

@Component({
  selector: 'app-fotoform',
  templateUrl: './fotoform.component.html',
  styleUrls: ['./fotoform.component.css']
})
export class FotoformComponent implements OnInit {

/*   httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }  */
  
  constructor(
      private databse: DataBaseService
    ) { }

  ngOnInit(): void {
  }

  submit(valor:any){
    console.log(valor.value);
    this.databse.postFoto(valor)
    /* this.http.post('http://localhost:3000/fotos/', JSON.stringify(valor.value), this.httpOptions).subscribe(); */
  }
}
