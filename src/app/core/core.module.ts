import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';

import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    
  ]
})
export class CoreModule { }
