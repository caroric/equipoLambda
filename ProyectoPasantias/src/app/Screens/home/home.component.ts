import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Variables para manejo de pantalla.
  pasantiasActivas: boolean = false;

  //Variables de datos.
  idEspecialidad: number;
  idAnio: number;
  idRango: number;
  constructor() { }

  ngOnInit(): void {
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
    this.pasantiasActivas = true;
  }
}
