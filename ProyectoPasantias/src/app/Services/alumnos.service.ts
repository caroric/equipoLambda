import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { alumno } from '../Models/alumno';
import { formularioarmxalumno } from '../Models/formularioarmxalumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  apiUrl: string;
  constructor(private http: HttpClient) { 
    this.apiUrl = 'https://localhost:5001/api/Alumno'
  }
  httpOptions = {
    headers: new HttpHeaders({
      Content_Type: 'application/json; charset=utf-8',
      
    }),
  };

  getAlumno(legajo: number): Observable<alumno> {
    return this.http
    .get<alumno>(this.apiUrl +'/obtenerAlumno/' + legajo)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  // update
  updateAlumno(alumnoModificado: alumno): Observable<alumno> {
    return this.http
      .put<alumno>(
        this.apiUrl + '/actualizarAlumno',
        alumnoModificado
      )
      .pipe(retry(1), catchError(this.errorHandler));
  }


  // SAVE FORMULARIOARMXALUMNO
  saveFormularioXAlumno(arm: formularioarmxalumno): Observable<formularioarmxalumno> {
    return this.http
      .post<formularioarmxalumno>(
        this.apiUrl + '/postularAlumno',
        arm, this.httpOptions
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
