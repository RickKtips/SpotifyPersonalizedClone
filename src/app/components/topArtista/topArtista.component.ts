import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { newArtista } from 'src/app/common/factories';
import { IArtista } from 'src/app/interfaces/iArtista';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-artista',
  standalone: false,
  templateUrl: './topArtista.component.html',
  styleUrls: ['./topArtista.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TopArtistaComponent implements OnInit {

  topArtista: IArtista = newArtista();

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit(): void {
    this.buscarArtista();
  }

async buscarArtista(){
  const artista = await this.spotifyService.buscarTopArtistas(10);

  if(!!artista && artista.length > 0){
    this.topArtista = artista.pop();
  }
};

}
