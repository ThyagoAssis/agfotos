import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FotolistComponent } from './fotografia/fotolist/fotolist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'fotos', component: FotolistComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
