import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome,faSearch, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { IPlaylist } from 'src/app/interfaces/iPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-painel-Direito',
  standalone: false,
  templateUrl: './painelDireito.component.html',
  styleUrls: ['./painelDireito.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PainelDireitoComponent implements OnInit{

  playlists: IPlaylist[] = [];

  constructor(private playlistService: SpotifyService,
    private router: Router
  ) {

  }
  ngOnInit(): void {

  }

 }
