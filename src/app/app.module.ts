import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FotografiaModule } from './fotografia/fotografia.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    FotografiaModule,
    AppRoutingModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
