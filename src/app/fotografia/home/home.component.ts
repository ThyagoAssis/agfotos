import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagemHome = "https://cdn.pixabay.com/photo/2020/04/20/14/47/car-5068532_960_720.png";
  constructor() { }

  ngOnInit(): void {
  }

}
