import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FotografiaModule } from './fotografia/fotografia.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    FotografiaModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
