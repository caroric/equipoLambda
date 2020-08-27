import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { aniosCursado } from '../../../environments/environment';

@Component({
  selector: 'app-anio-alumno',
  templateUrl: './anio-alumno.component.html',
  styleUrls: ['../select-style.css']
})
export class AnioAlumnoComponent implements OnInit {
  anios: any[] = aniosCursado;
  selected: number;

  @Input() InputAnio: number;
  @Output() OutputAnio: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(){
    this.OutputAnio.emit(+this.selected);
  }
}
