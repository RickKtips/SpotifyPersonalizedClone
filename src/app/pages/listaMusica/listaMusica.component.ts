import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { newMusica } from 'src/app/common/factories';
import { IMusica } from 'src/app/interfaces/iMusica';
import { IPlaylist } from 'src/app/interfaces/iPlaylist';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-lista-musica',
  standalone: false,
  // template: ` test`,
  templateUrl: './listaMusica.component.html',
  styleUrls: ['./listaMusica.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListaMusicaComponent implements OnInit, OnDestroy {

bannerImagemUrl='';
bannerTexto='';

  musicas: IMusica[] = [];
  musicaAtual: IMusica = newMusica();

  subs:Subscription [] = [];  

  playIcone = faPlay;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private playerService: PlayerService,
  ) {}
  ngOnInit(): void {
    this.obterMusicas();  
    this.obterMusicaAtual();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  async obterMusicas() {
    const sub = this.activatedRoute.paramMap.subscribe(async params => {
      const tipo = params.get('tipo');
      const id = params.get('id');
      await this.obterDadosPagina(tipo, id);
     });

     this.subs.push(sub);
  }


    async obterDadosPagina(tipo: string, id: string) {
        if(tipo === 'playlist'){
        await this.obterDadosPlaylist(id);
        } else {
        await this.obterDadosArtista(id);
        }
    }

    async obterDadosPlaylist(id: string) {
      const PlaylistMusicas = await this.spotifyService.buscarMusicasPlaylist(id);
      this.definirDados(PlaylistMusicas);
    }

    obterMusicaAtual(){
      const subs = this.playerService.musicaAtual.subscribe(musica => {
         this.musicaAtual = musica;
       });
       this.subs.push(subs);
     }
   
    async obterDadosArtista(id: string) {


      
    }

definirDados(playlist: IPlaylist){

this.bannerImagemUrl=playlist.imagemUrl;
this.bannerTexto=playlist.nome;
this.musicas=playlist.musicas;
}

obterArtistas(musica: IMusica){
  return musica.artistas.map(artista => artista.nome).join(', ');
  } 

async executarMusica(musica: IMusica){
  await this.spotifyService.executarMusica(musica.id);
  this.playerService.definirMusicaAtual(musica);
  }

 }
