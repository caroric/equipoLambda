import { Component, OnInit } from '@angular/core';
//import { Pasantia } from '../../Models/Pasantia';
import { PasantiasService } from '../../Services/pasantias.service';
import { especialidadxarm } from '../../Models/especialidadxarm';
import { MockAlumnosService } from '../../Services/mock-alumnos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Variables para manejo de pantalla.
  inicio= true;
  verTabla=true;
  sinPasantiasActivas = false;
  solicitarLegajoAlumno = false;
  showModal: boolean = false;
  legajoExistente: boolean = true;
  //Variables de datos.
  idEspecialidad: number=0;
  idAnio: number=0;
  remuneracion: number =0;
  pasantias: especialidadxarm[] = [];
  palabrasClave: string;
  pasantiasFiltradas: especialidadxarm[] = [];
  legajo: string;
  pasantiaSeleccionada: any;
  alumnoSolicitante:any;
  mail: string;
  telefono: string;
  
  constructor(private servicePasantias: PasantiasService,
              private mockAlumnos: MockAlumnosService) { }

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

  receiveNotificacionSolicitud($event){
    this.inicio = $event;
    this.verTabla = false;
    this.solicitarLegajoAlumno = true;
    console.log('var inicio--> ' + this.inicio)
    console.log(this.inicio);
  }

  receivePasantia($event){
    this.pasantiaSeleccionada = $event;
    console.log('pasantia seleccionada');
    console.log(this.pasantiaSeleccionada);
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

  volverAlHome(){
    this.legajoExistente = true;
    this.alumnoSolicitante=null;
    this.solicitarLegajoAlumno = false;
    this.inicio = true;
    this.verTabla = true;
  }

  receiveLegajo($event){
    this.legajo = $event;
    console.log('-->Legajo: ' + this.legajo);
  }

  receiveMail($event){
    this.mail = $event;
    console.log('Home/mail --> ' + this.mail );
  }

  receiveTelefono($event){
    this.telefono = $event;
    console.log('Home/telefono --> ' + this.telefono);
  }

  buscarLegajo(){
    this.alumnoSolicitante=null;
    let alumnos = this.mockAlumnos.getAlumnos();
    console.log('BUSCAR ALUMNOS');
    console.log(alumnos);
    
    alumnos.forEach((al) => {
      if(al.legajo === this.legajo){
        this.alumnoSolicitante = al;
      }
    });

    if(this.alumnoSolicitante){
      this.legajoExistente = true;
      console.log('EXITO. SE HA ENCONTRADO EL LEGAJO');
      console.log(this.alumnoSolicitante);
    }
    else{
      this.legajoExistente = false;
      console.log('ERROR. NO SE ENCONTRÓ EL LEGAJO.')
    }
  }

  confirmarSolicitud(){
    document.getElementById('a-confirmar').click();
  }

  closeModal(){
    document.getElementById('a-ok').click();
    this.alumnoSolicitante=null;
    this.solicitarLegajoAlumno = false;
    this.inicio = true;
    this.verTabla = true;
  }

  cancelarSolicitud(){
    this.alumnoSolicitante=null;
    this.solicitarLegajoAlumno = false;
    this.inicio = true;
    this.verTabla = true;
  }

  clickBuscarLegajo($event){
    this.buscarLegajo();
  }
}
