import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { FotoComponent } from "./foto/foto.component";
import { FotolistComponent } from './fotolist/fotolist.component';
import { FotoformComponent } from './fotoform/fotoform.component';
import { FotosComponent } from "./fotolist/fotos/fotos.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        FotoComponent,
        FotolistComponent,
        FotoformComponent,
        FotosComponent
    ],

    imports:[SharedModule]

})
export class FotografiaModule{}
