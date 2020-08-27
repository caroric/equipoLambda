import { Injectable } from '@angular/core';
import { Pasantia } from '../Models/Pasantia';
@Injectable({
  providedIn: 'root'
})
export class MockPasantiasService {

  constructor() { }

  getPasantiasActivas(): Pasantia[]{
    return [
      {fechaInicioBusqueda:  new Date("2020-08-20"),
      fechaFinBusqueda:  new Date("2020-09-20"),
      razonSocial: 'Hexacta',
      cargoACubrir:'Pasante en desarrollo',
      perfil:'Desarrollador fullstack',
      datos:'Conocimientos en .NET y React JS'},
      {fechaInicioBusqueda:  new Date("2020-08-10"),
      fechaFinBusqueda:  new Date("2020-09-05"),
      razonSocial: 'Vates',
      cargoACubrir:'Pasante en desarrollo',
      perfil:'Desarrollador backend',
      datos:'Conocimientos en Java'},
      {fechaInicioBusqueda:  new Date("2020-08-10"),
      fechaFinBusqueda:  new Date("2020-09-05"),
      razonSocial: 'Vates',
      cargoACubrir:'Pasante en testing',
      perfil:'Tester',
      datos:'Ser alumno/a regular en cuarto año.'},
      {fechaInicioBusqueda:  new Date("2020-08-10"),
      fechaFinBusqueda:  new Date("2020-09-05"),
      razonSocial: 'Globant',
      cargoACubrir:'Pasante en desarrollo',
      perfil:'Desarrollador frontend',
      datos:'Conocimientos de HTML, CSS y Javascript. Angular (deseable)'},
      {fechaInicioBusqueda:  new Date("2020-08-10"),
      fechaFinBusqueda:  new Date("2020-09-05"),
      razonSocial: 'Recursos informáticos',
      cargoACubrir:'Pasante IT',
      perfil:'Soporte técnico',
      datos:''},
      {fechaInicioBusqueda:  new Date("2020-08-10"),
      fechaFinBusqueda:  new Date("2020-09-05"),
      razonSocial: 'Recursos informáticos',
      cargoACubrir:'Pasante IT',
      perfil:'Redes de información',
      datos:'S.O Linux, conocimiento en redes. Alumno regular en quinto año.'},
    ]
    //return [];
  }
}
