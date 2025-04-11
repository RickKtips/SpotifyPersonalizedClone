import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { newMusica } from 'src/app/common/factories';
import { IMusica } from 'src/app/interfaces/iMusica';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home-page',
  standalone: false,
  //template: ` test`,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit, OnDestroy {

  musicas: IMusica[] = [];
  musicaAtual: IMusica = newMusica();

subs:Subscription [] = [];  

  playIcone = faPlay;
  constructor(
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
    this.musicas = await this.spotifyService.buscarMusicas();
    console.log(this.musicas);
  }

  obterMusicaAtual(){
   const subs = this.playerService.musicaAtual.subscribe(musica => {
      this.musicaAtual = musica;
    });
    this.subs.push(subs);
  }

obterArtistas(musica: IMusica){
return musica.artistas.map(artista => artista.nome).join(', ');
} 

async executarMusica(musica: IMusica){
await this.spotifyService.executarMusica(musica.id);
this.playerService.definirMusicaAtual(musica);
}

 }
