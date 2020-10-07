import { Injectable } from '@angular/core';
import { alumno } from '../Models/alumno';
import { formularioarmxalumno } from '../Models/formularioarmxalumno';
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

  getFormulariosXAlumno(): formularioarmxalumno[]{
    let fecha: Date= new Date();
    return[
      { id_formularioArmXalumno: 1,
        id_formularioArm: 1,
        legajo_alumno: 49685,
        fecha_solicitud: fecha,
        fecha_respuesta: null,
        legajo_responsable: 90145,
        id_estado: 1,
        observacion: null
      },
      { id_formularioArmXalumno: 3,
        id_formularioArm: 3,
        legajo_alumno: 72658,
        fecha_solicitud: fecha,
        fecha_respuesta: fecha,
        legajo_responsable: 90145,
        id_estado: 2,
        observacion: 'Sin observaciones.'
      }
    ]
  }
}
