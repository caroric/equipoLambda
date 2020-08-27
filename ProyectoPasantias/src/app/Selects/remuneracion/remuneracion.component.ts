import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { rangos } from '../../../environments/environment';

@Component({
  selector: 'app-remuneracion',
  templateUrl: './remuneracion.component.html',
  styleUrls: ['../select-style.css']
})
export class RemuneracionComponent implements OnInit {
  rangos: any[] = rangos;
  selected: number;

  @Input() InputRemuneracion: number;
  @Output() OutputRemuneracion: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(){
    this.OutputRemuneracion.emit(+this.selected);
  }
}
