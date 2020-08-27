import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { especialidades } from '../../../environments/environment';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['../select-style.css']
})
export class EspecialidadesComponent implements OnInit {
  especialidades: any[] = especialidades;
  selected: number;

  @Input() InputEspecialidad: number;
  @Output() OutputEspecialidad: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(){
    this.OutputEspecialidad.emit(+this.selected);
  }
}
