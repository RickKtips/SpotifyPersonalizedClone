import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-rodape-usuario',
  standalone: false,
  templateUrl: './rodapeUsuario.component.html',
  styleUrls: ['./rodapeUsuario.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class RodapeUsuarioComponent implements OnInit {

usuario:IUsuario = null;
 
sairIcone = faSignOutAlt;

  @Output()
  click = new EventEmitter<void>();

  constructor(
    private spotifyService: SpotifyService
  ) {}
  ngOnInit(): void {
      this.usuario = this.spotifyService.usuario;
  }

  onClick(){
    this.click.emit();
  }

  logout(){
    this.spotifyService.logout();
  }
 }
