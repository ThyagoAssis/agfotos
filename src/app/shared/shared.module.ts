import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
 imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  
  exports:[
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
