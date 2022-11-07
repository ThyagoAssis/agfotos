import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { FotoComponent } from "./foto/foto.component";
import { FotolistComponent } from './fotolist/fotolist.component';
import { FotoformComponent } from './fotoform/fotoform.component';
import { FotosComponent } from "./fotolist/fotos/fotos.component";
<<<<<<< HEAD
import { FormsModule } from "@angular/forms";
=======
import { SharedModule } from "../shared/shared.module";
>>>>>>> aae86a35f234083cf8d6c79d070201b38719234a

@NgModule({
    declarations: [
        FotoComponent,
        FotolistComponent,
        FotoformComponent,
        FotosComponent
    ],
<<<<<<< HEAD
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule
    ]
    
=======

    imports:[SharedModule]

>>>>>>> aae86a35f234083cf8d6c79d070201b38719234a
})
export class FotografiaModule{}
