import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PasantiasService } from '../../Services/pasantias.service';
import { especialidad } from '../../Models/especialidad';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['../select-style.css']
})
export class EspecialidadesComponent implements OnInit {
  especialidades: especialidad[] = [];
  selected: number;

  @Input() InputEspecialidad: number;
  @Output() OutputEspecialidad: EventEmitter<number> = new EventEmitter<number>();
  constructor(private servicePasantias: PasantiasService) { }

  ngOnInit(): void {
    this.loadEspecialidad();
  }

  loadEspecialidad(){
    this.servicePasantias.getEspecialidades()
    .subscribe((response: any) => {
      this.especialidades = response;
      console.log('llamada a servicio')
    });
  }

  seleccionar(){
    this.OutputEspecialidad.emit(+this.selected);
  }
}
