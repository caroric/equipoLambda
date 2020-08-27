import { Component, OnInit } from '@angular/core';
import { Pasantia } from '../../Models/Pasantia';
import { MockPasantiasService } from '../../Services/mock-pasantias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Variables para manejo de pantalla.
  mostrarFiltros: boolean = false;
  tablaPasantias: boolean = false;

  //Variables de datos.
  idEspecialidad: number;
  idAnio: number;
  idRango: number;
  pasantias: Pasantia[] = [];

  constructor(private mockService: MockPasantiasService) { }

  ngOnInit(): void {
    this.pasantias = this.mockService.getPasantiasActivas();
  }

  receiveEspecialidad($event){
    this.idEspecialidad = $event;
    console.log('Home/especialidad --> ' + this.idEspecialidad);
  }

  receiveAnioCursado($event){
    this.idAnio = $event;
    console.log('Home/año cursado --> ' + this.idAnio);
  }

  receiveRemuneracion($event){
    this.idRango = $event;
    console.log('Home/remuneracion --> ' + this.idRango);
  }

  mostrarTabla(){
    this.mostrarFiltros = true;
  }

  buscarPasantias(){
    this.tablaPasantias = true;
  }
}
