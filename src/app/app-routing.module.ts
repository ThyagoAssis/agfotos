import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotoformComponent } from './fotografia/fotoform/fotoform.component';

import { FotolistComponent } from './fotografia/fotolist/fotolist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'fotos', component: FotolistComponent },
  { path: '', component: HomeComponent },
  { path: 'formulario', component: FotoformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
