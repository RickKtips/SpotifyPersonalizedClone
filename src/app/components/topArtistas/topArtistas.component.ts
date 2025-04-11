import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { newArtista } from 'src/app/common/factories';
import { IArtista } from 'src/app/interfaces/iArtista';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-artistas',
  standalone: false,
  templateUrl: './topArtistas.component.html',
  styleUrls: ['./topArtistas.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TopArtistasComponent implements OnInit {

artistas: IArtista[] = [];

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit(): void {
    this.buscarTopArtistas();
  }

async buscarTopArtistas(){
this.artistas = await this.spotifyService.buscarTopArtistas(3);
}

}
