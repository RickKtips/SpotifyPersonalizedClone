import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-artista-item-imagem',
  standalone: false,
  templateUrl: './artistaItemImagem.component.html',
  styleUrls: ['./artistaItemImagem.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ArtistaItemImagemComponent implements OnInit {
  @Input()
  imagemSrc='';
  
  @Input()
  artistaNone='';

  @Output()
  click = new EventEmitter<void>();

  constructor() {}
  ngOnInit(): void {
      
  }

  onClick(){
    this.click.emit();
  }
 }
