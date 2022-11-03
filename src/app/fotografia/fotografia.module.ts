import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { FotoComponent } from "./foto/foto.component";
import { FotolistComponent } from './fotolist/fotolist.component';
import { FotoformComponent } from './fotoform/fotoform.component';
import { FotosComponent } from "./fotolist/fotos/fotos.component";

@NgModule({
    declarations: [
        FotoComponent, 
        FotolistComponent, 
        FotoformComponent,
        FotosComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
    ]
    
})
export class FotografiaModule{}