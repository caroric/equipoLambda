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
      legajo: '70374',
      especialidad: 'Sistemas de información',
      email: 'caro@gmail.com',
      telefono: '15487885'},

      {nombre:'Marianella',
      apellido: 'Luque',
      legajo: '69785',
      especialidad: 'Sistemas de información',
      email: 'maru@gmail.com',
      telefono: '15487885'},

      {nombre:'Nicolas',
      apellido: 'Ferraro',
      legajo: '68999',
      especialidad: 'Química',
      email: 'nicolas@gmail.com',
      telefono: '15487885'},

      {nombre:'Marcelo',
      apellido: 'Acosta',
      legajo: '65289',
      especialidad: 'Mecánica',
      email: 'marce@gmail.com',
      telefono: '15487885'},
    ]
  }
}
