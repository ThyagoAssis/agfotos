import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FotoComponent } from './foto/foto.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'fotos', component: FotoComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
