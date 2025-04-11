import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListaMusicaRotas } from "./listaMusica.routes";
import { RouterModule } from "@angular/router";
import { ListaMusicaComponent } from "./listaMusica.component";

@NgModule({ 
    declarations: [
        ListaMusicaComponent,
    ], 
    imports: [
        CommonModule,
        RouterModule.forChild(ListaMusicaRotas)
    ] 
})
export class ListaMusicaModule {}