import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { newArtista } from 'src/app/common/factories';
import { IArtista } from 'src/app/interfaces/iArtista';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-buscas-recentes',
  standalone: false,
  templateUrl: './buscasRecentes.component.html',
  styleUrls: ['./buscasRecentes.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BuscasRecentesComponent implements OnInit {

pesquisasRecentes = [
  'Top Artistas',
  'Top Musicas',
  'Samba e Pagode',
  'Rock',
  'sertanejo'
]

campoPesquisa = '';

  constructor() {

  }

  ngOnInit(): void {
  }

  definirPesquisa(pesquisa: string){
    this.campoPesquisa = pesquisa;
  }

buscar(){
  console.log('pesquisando' + this.campoPesquisa);
}
}
