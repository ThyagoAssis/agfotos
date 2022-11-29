import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { FotoComponent } from "./foto/foto.component";
import { FotolistComponent } from './fotolist/fotolist.component';

import { FotoformComponent } from './fotoform/fotoform.component';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        FotoComponent,
        FotolistComponent,
        FotoformComponent,        
    ],

    imports: [       
        SharedModule    
    ],

    exports:[
        FotoformComponent,
        FotoComponent,
        FotolistComponent
    ]
})
export class FotografiaModule{}
