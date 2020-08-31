import { Component, OnInit, Output } from '@angular/core';
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
  palabrasClave: string;
  pasantiasFiltradas: Pasantia[] = [];

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

  receivePalabrasClave($event){
    this.palabrasClave = $event;
    console.log('Palabras clave --> ' + this.palabrasClave);
  }

  filtrarPasantias(){
    this.pasantias = this.mockService.getPasantiasActivas();
    this.pasantiasFiltradas = this.pasantias.filter(Pasantia => Pasantia.razonSocial.toLowerCase().includes(this.palabrasClave.toLowerCase()) 
    || Pasantia.perfil.toLowerCase().includes(this.palabrasClave.toLowerCase()) 
    || Pasantia.cargoACubrir.toLowerCase().includes(this.palabrasClave.toLowerCase()));
    this.pasantias = this.pasantiasFiltradas;
    console.log(this.pasantiasFiltradas);
    console.log(this.pasantias);
  }


  mostrarTabla(){
    this.tablaPasantias = false;
    this.mostrarFiltros = true;
  }

  buscarPasantias(){
    this.mostrarFiltros= false;
    this.tablaPasantias = true;
  }

  verDatosPasantia(pasantia: any){
    console.log('ver pasantia');
    console.log(pasantia);
  }
}
