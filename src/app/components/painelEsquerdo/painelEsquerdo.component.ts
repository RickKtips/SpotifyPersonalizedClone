import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome,faSearch, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { IPlaylist } from 'src/app/interfaces/iPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-painel-esquerdo',
  standalone: false,
  templateUrl: './painelEsquerdo.component.html',
  styleUrls: ['./painelEsquerdo.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PainelEsquerdoComponent implements OnInit{

  menuSelecionado = 'home';
  playlists: IPlaylist[] = [];

  homeIcone = faHome; 
  pesquisarIcone = faSearch;
  artistaIcone = faGuitar;
  playlistIcone = faMusic;
  constructor(private playlistService: SpotifyService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.listarPlaylists();
  }

  botaoClick(botao:string){
    this.menuSelecionado = botao;
    this.router.navigateByUrl('player/'+botao);
  }
  
async listarPlaylists(){  
  this.playlists = await this.playlistService.buscarPlaylistUsuario();
}

irParaPlaylist(playlistId:string){
  this.menuSelecionado = playlistId;
  this.router.navigateByUrl(`player/lista/playlist/${playlistId}`);
}

 }
