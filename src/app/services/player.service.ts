import { Injectable } from "@angular/core";
import { IMusica } from "../interfaces/iMusica";
import { newMusica } from "../common/factories";
import { BehaviorSubject } from "rxjs";
import { SpotifyService } from "./spotify.service";

@Injectable({
  providedIn: 'root'
})

export class PlayerService {
    musicaAtual = new BehaviorSubject<IMusica>(newMusica());

    timerId:any = null;

  constructor( private spotifyService: SpotifyService) {
    this.obterMusicaAtual();
  }

 async obterMusicaAtual(){    
    clearTimeout(this.timerId);
    //obter musica atual
    const musica = await this.spotifyService.obterMusicaAtual();
    this.definirMusicaAtual(musica);
    //loop para obter a musica atual	
    this.timerId = setInterval(async()=>{this.obterMusicaAtual()}, 3000);
 }

 definirMusicaAtual(musica: IMusica){   
    this.musicaAtual.next(musica);
 }
}