import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { newMusica } from 'src/app/common/factories';
import { IMusica } from 'src/app/interfaces/iMusica';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-player-card',
  standalone: false,
  templateUrl: './playerCard.component.html',
  styleUrls: ['./playerCard.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PlayerCardComponent implements OnInit, OnDestroy {


musica: IMusica = newMusica();
subs:Subscription[] = [];

anteriorIcone = faStepBackward;
proximoIcone = faStepForward;

  constructor( private playerService: PlayerService,
    private spotifyService: SpotifyService
  ) {}
  ngOnInit(): void {
      this.obterMusicaAtual(); 
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  obterMusicaAtual(){ 
    const sub = this.playerService.musicaAtual.subscribe((musica) => { this.musica = musica; });
    this.subs.push(sub);
  }

  obterArtistas(){
    return this.musica.artistas.map(artista => artista.nome).join(', ');
    } 
    
    async voltarMusica(){
      await this.spotifyService.voltarMusica();
    }

    async proximaMusica() {
      await this.spotifyService.proximaMusica();
    }

}
