import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { responsable } from '../Models/responsable';
import { formularioarmxalumno } from '../Models/formularioarmxalumno'

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  apiUrl: string;
  constructor(private http: HttpClient) { 
    this.apiUrl = 'https://localhost:5001/api/Responsable'
  }
  httpOptions = {
    headers: new HttpHeaders({
      Content_Type: 'application/json; charset=utf-8',
      
    }),
  };

  //FORMULARIOS ARM X ALUMNO
  getResponsable(legajo: number): Observable<responsable> {
    return this.http
      .get<responsable>(this.apiUrl + '/obtenerResponsable/' + legajo)
      .pipe(retry(1), catchError(this.errorHandler));
  }


  //FORMULARIOS ARM X ALUMNO
  getArmXAlumno(): Observable<formularioarmxalumno[]> {
    return this.http
      .get<formularioarmxalumno[]>(this.apiUrl + '/mostrarSolicitudes')
      .pipe(retry(1), catchError(this.errorHandler));
  }

  // update
  
  updateArmxAlumno(arm: formularioarmxalumno ): Observable<formularioarmxalumno> {
    return this.http
      .put<formularioarmxalumno>(
        this.apiUrl + '/procesarSolicitud',
        arm
      )
      .pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  
}
