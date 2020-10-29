import { Component, OnInit } from '@angular/core';
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
  constructor( private servicio: ResponsableService) { }

  receiveLegajo($event){
    this.legajo=$event;
  }

  ngOnInit(): void {
  }

  receiveClickBusqueda($event){
    this.buscarLegajo();
  }

  buscarLegajo(){
    this.servicio.getResponsable(this.legajo)
    .subscribe((response) => {
      if(response !== null){
        if(!this.legajoExistente){ this.legajoExistente=true;}
        this.cargarPedidos();
      }
      else{
        this.legajoExistente=false;
      }
    },
    (error)=>{ this.legajoExistente = false;});
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
