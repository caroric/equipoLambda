import { Injectable } from '@angular/core';
import { alumno } from '../Models/alumno';
@Injectable({
  providedIn: 'root'
})
export class MockAlumnosService {

  constructor() { }

  getAlumnos(): alumno[]{
    return[
      {nombre:'Carolina',
      apellido: 'Ricagno',
      legajo: '70374'},

      {nombre:'Marianella',
      apellido: 'Luque',
      legajo: '69785'},

      {nombre:'Nicolas',
      apellido: 'Ferraro',
      legajo: '68999'},

      {nombre:'Marcelo',
      apellido: 'Acosta',
      legajo: '65289'},
    ]
  }
}
