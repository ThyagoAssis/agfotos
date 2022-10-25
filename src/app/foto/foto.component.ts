import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  title = "Minhas Fotos";
  fotos = [
    {
      img: "https://cdn.pixabay.com/photo/2017/07/05/19/32/oldtimer-2475746__340.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit odio eget ultrices porttitor.",
      titulo: "Carro Vermelho"
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/01/28/16/31/auto-3114102__340.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit odio eget ultrices porttitor.",
      titulo: "Carro Verde"
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/07/05/19/32/oldtimer-2475748__340.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit odio eget ultrices porttitor.",
      titulo: "Carro Rosa"
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/01/28/16/37/auto-3114120__340.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit odio eget ultrices porttitor.",
      titulo: "Carro Cinza"
    },
    {
      img: "https://cdn.pixabay.com/photo/2014/08/04/17/03/chrysler-409795__340.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit odio eget ultrices porttitor.",
      titulo: "Carro Garfite"
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/05/07/19/58/car-3381549__340.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit odio eget ultrices porttitor.",
      titulo: "Carro Branco"
    }
  ]
  constructor() {

   }

  ngOnInit(): void {
  }



}
