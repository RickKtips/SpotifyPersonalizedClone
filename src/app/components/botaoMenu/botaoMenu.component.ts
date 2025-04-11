import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao-menu',
  standalone: false,
  templateUrl: './botaoMenu.component.html',
  styleUrls: ['./botaoMenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BotaoMenuComponent implements OnInit {
  @Input()
  descricao='';
  
  @Input()
  selecionado=false;

  @Input()
  tamanho='m'

  @Output()
  click = new EventEmitter<void>();

  constructor() {}
  ngOnInit(): void {
      
  }

  onClick(){
    this.click.emit();
  }
 }
