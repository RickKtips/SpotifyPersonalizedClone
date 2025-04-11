import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRotas } from "./home.routes";
import { RouterModule } from "@angular/router";

@NgModule({ 
    declarations: [
        HomeComponent
    ], 
    imports: [
        CommonModule,
        RouterModule.forChild(HomeRotas)
    ] 
})
export class HomeModule {}