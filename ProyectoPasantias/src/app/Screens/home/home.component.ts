import { Component, OnInit } from '@angular/core';
//import { Pasantia } from '../../Models/Pasantia';
import { PasantiasService } from '../../Services/pasantias.service';
import { especialidadxarm } from '../../Models/especialidadxarm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Variables para manejo de pantalla.
  inicio= true;
  sinPasantiasActivas = false;
  //Variables de datos.
  idEspecialidad: number=0;
  idAnio: number=0;
  remuneracion: number =0;
  pasantias: especialidadxarm[] = [];
  palabrasClave: string;
  pasantiasFiltradas: especialidadxarm[] = [];
  constructor(private servicePasantias: PasantiasService) { }

  ngOnInit(): void {
    this.loadPasantias();
    //this.sinPasantiasActivas = true;
  }

  receiveEspecialidad($event){
    this.idEspecialidad = $event;
    console.log('Home/especialidad --> ' + this.idEspecialidad);
    this.filtrarPasantias();
  }

  receiveAnioCursado($event){
    this.idAnio = $event;
    console.log('Home/año cursado --> ' + this.idAnio);
    this.filtrarPasantias();
  }

  receiveRemuneracion($event){
    this.remuneracion = $event;
    console.log('Home/remuneracion --> ' + this.remuneracion
    );
    this.filtrarPasantias();
  }

  receivePalabrasClave($event){
    this.palabrasClave = $event;
    console.log('Palabras clave --> ' + this.palabrasClave);
    this.buscarPorPalabraClave();
  }

  receiveNotificacion($event){
    this.inicio = $event;
    console.log('var inicio--> ' + this.inicio)
    console.log(this.inicio);
  }

  buscarPorPalabraClave(){
    this.servicePasantias.getPasantiasConFiltro(this.idEspecialidad, this.idAnio, this.remuneracion)
    .subscribe((response: any) => {
      this.pasantias = response;
      this.pasantiasFiltradas = this.pasantias.filter(Pasantia => Pasantia.formularioarm.sucursal.nombre_sucursal.toLowerCase().includes(this.palabrasClave.toLowerCase()) 
      || Pasantia.formularioarm.perfilSolicitado.toLowerCase().includes(this.palabrasClave.toLowerCase()) 
      || Pasantia.formularioarm.cargoACubrir.toLowerCase().includes(this.palabrasClave.toLowerCase()));
      this.pasantias = this.pasantiasFiltradas;
    });
  }

  mostrarTabla(){
    this.servicePasantias.getPasantiasConFiltro(this.idEspecialidad, this.idAnio, this.remuneracion)
    .subscribe((response: any) => {
      this.pasantias = response;
    });
  }

  filtrarPasantias(){
    this.servicePasantias.getPasantiasConFiltro(this.idEspecialidad, this.idAnio, this.remuneracion)
    .subscribe((response:any) => {
      console.log('PASANTIAS');
      this.pasantias = response;
      if(this.pasantias.length === 0){ this.sinPasantiasActivas=true;}
      else{
        if(this.sinPasantiasActivas){ this.sinPasantiasActivas = false;}
      }
    });
  }

  loadPasantias(){
    console.log('especialidad--> '+this.idEspecialidad)
    this.servicePasantias.getPasantiasConFiltro(this.idEspecialidad, this.idAnio, this.remuneracion)
    .subscribe((response:any) => {
      console.log('PASANTIAS');
      this.pasantias = response;
      if(this.pasantias.length === 0){ this.sinPasantiasActivas=true;}
    });
  }

  verDatosPasantia(pasantia: any){
    console.log('ver pasantia');
    console.log(pasantia);
  }

}
