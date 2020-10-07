import { Component, OnInit } from '@angular/core';
import { MockAlumnosService } from '../../Services/mock-alumnos.service';
import { formularioarmxalumno } from '../../Models/formularioarmxalumno';
@Component({
  selector: 'app-procesar-pasantias',
  templateUrl: './procesar-pasantias.component.html',
  styleUrls: ['../home/home.component.css']
})
export class ProcesarPasantiasComponent implements OnInit {
  legajo:string;
  legajoExistente:boolean = true;

  pedidosPasantia: formularioarmxalumno[];
  verTabla: boolean = false;
  containerLegajo: boolean = true;
  constructor(private mock: MockAlumnosService) { }

  receiveLegajo($event){
    this.legajo=$event;
  }

  ngOnInit(): void {
  }

  buscarLegajo(){
    let alumnos = this.mock.getAlumnos();
    console.log('BUSCAR ALUMNOS');
    console.log(alumnos);
    
    let alumno: any;
    alumnos.forEach((al) => {
      if(al.legajo === this.legajo){
        alumno = al;
      }
    });

    if(alumno){
      this.legajoExistente = true;
      console.log('EXITO. SE HA ENCONTRADO EL LEGAJO');
      console.log(alumno);
      this.cargarPedidos();
    }
    else{
      this.legajoExistente = false;
      console.log('ERROR. NO SE ENCONTRÓ EL LEGAJO.')
    }
  }

  cargarPedidos(){
    this.pedidosPasantia = this.mock.getFormulariosXAlumno();
    console.log('pedidos');
    console.log(this.pedidosPasantia);
    this.containerLegajo = false;
    this.verTabla = true;
  }

}
