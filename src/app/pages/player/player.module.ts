import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PlayerComponent } from "./player.component";
import { PlayerRotas } from "./player.routes";
import { PainelEsquerdoComponent } from "src/app/components/painelEsquerdo/painelEsquerdo.component";
import { BotaoMenuComponent } from "src/app/components/botaoMenu/botaoMenu.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RodapeUsuarioComponent } from "src/app/components/rodapeUsuario/rodapeUsuario.component";
import { HomeComponent } from "../home/home.component";
import { TopArtistaComponent } from "src/app/components/topArtista/topArtista.component";
import { PainelDireitoComponent } from "src/app/components/painelDireito/painelDireito.component";
import { BuscasRecentesComponent } from "src/app/components/buscasRecentes/buscasRecentes.component";
import { FormsModule } from "@angular/forms";
import { TopArtistasComponent } from "src/app/components/topArtistas/topArtistas.component";
import { ArtistaItemImagemComponent } from "src/app/components/artistaItemImagem/artistaItemImagem.component";
import { PlayerCardComponent } from "src/app/components/playerCard/playerCard.component";
import { ListaMusicaComponent } from "../listaMusica/listaMusica.component";
import { BannerComponent } from "src/app/components/banner/banner.component";

@NgModule({ 
    declarations: [
        PlayerComponent,
        PainelEsquerdoComponent,
        BotaoMenuComponent, 
        RodapeUsuarioComponent,
        HomeComponent,
        TopArtistaComponent,
        PainelDireitoComponent,
        BuscasRecentesComponent,
        TopArtistasComponent,
        ArtistaItemImagemComponent,
        PlayerCardComponent,
        ListaMusicaComponent,
        BannerComponent,        
    ], 
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        RouterModule.forChild(PlayerRotas)
    ] 
})
export class PlayerModule {}