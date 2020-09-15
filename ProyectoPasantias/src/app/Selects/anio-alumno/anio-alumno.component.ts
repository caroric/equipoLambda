import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cantidadaniospasante } from '../../Models/cantidadAnios';
import { PasantiasService } from '../../Services/pasantias.service';

@Component({
  selector: 'app-anio-alumno',
  templateUrl: './anio-alumno.component.html',
  styleUrls: ['../select-style.css']
})
export class AnioAlumnoComponent implements OnInit {
  anios: cantidadaniospasante[] = [];
  selected: number;

  @Input() InputAnio: number;
  @Output() OutputAnio: EventEmitter<number> = new EventEmitter<number>();

  constructor(private servicePasantia: PasantiasService) { }

  ngOnInit(): void {
    this.loadAnios();
  }

  loadAnios(){
    this.servicePasantia.getAniosPasante()
    .subscribe((response: any) => {
      this.anios = response;
    });
  }

  seleccionar(){
    this.OutputAnio.emit(+this.selected);
  }
}
