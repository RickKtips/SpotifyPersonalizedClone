import { ChangeDetectionStrategy, Component,  Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BannerComponent implements OnInit {

@Input()
imagemUrl='';

@Input()
text = '';
  
  constructor() {

  }

  ngOnInit(): void {
  }



}
