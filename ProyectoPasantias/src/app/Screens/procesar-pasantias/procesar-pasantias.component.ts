import { Component, OnInit } from '@angular/core';
import { MockAlumnosService } from '../../Services/mock-alumnos.service';
import { formularioarmxalumno } from '../../Models/formularioarmxalumno';
import { ResponsableService } from '../../Services/responsable.service';
@Component({
  selector: 'app-procesar-pasantias',
  templateUrl: './procesar-pasantias.component.html',
  styleUrls: ['../home/home.component.css']
})
export class ProcesarPasantiasComponent implements OnInit {
  legajo:number;
  legajoExistente:boolean = true;

  pedidosPasantia: formularioarmxalumno[];
  verTabla: boolean = false;
  containerLegajo: boolean = true;
  constructor( private servicio: ResponsableService,
              private mock: MockAlumnosService) { }

  receiveLegajo($event){
    this.legajo=$event;
  }

  ngOnInit(): void {
  }

  buscarLegajo(){
    this.servicio.getResponsable(this.legajo)
    .subscribe((response) => {
      if(response !== null){
        this.cargarPedidos();
      }
    });
  }

  cargarPedidos(){
    this.servicio.getArmXAlumno().
    subscribe((response) => {
      this.pedidosPasantia = response;
      console.log(response);
      this.containerLegajo = false;
      this.verTabla = true;
    });
  }

  reload($event){
    this.pedidosPasantia = [];
    this.cargarPedidos();
  }
}
