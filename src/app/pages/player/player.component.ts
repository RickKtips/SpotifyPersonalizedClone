import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: false,
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PlayerComponent { }
