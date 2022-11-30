import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';

import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [    
    HeaderComponent
  ],
  exports: [
    HeaderComponent   
  ],
  imports: [AppRoutingModule]
  
})
export class CoreModule { }
