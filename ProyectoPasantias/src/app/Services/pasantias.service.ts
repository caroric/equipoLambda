import { Injectable } from '@angular/core';
import { formularioarm } from '../Models/formularioarm';
import { especialidad } from '../Models/especialidad';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasantiasService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'https://localhost:5001/api/home'
   }
  httpOptions = {
    headers: new HttpHeaders({
      Content_Type: 'application/json; charset=utf-8',
    }),
  };

  getPasantiasConFiltro(especialidad: number = 0,
    cantidadAnios: number = 0,
    remuneracion: number = 0): Observable<formularioarm[]> {
    let params = new HttpParams();
    params = especialidad ? params.append('especialidad', especialidad.toString()) : params;
    params = cantidadAnios ? params.append('cantidadAnios', cantidadAnios.toString()) : params;
    params = remuneracion ? params.append('remuneracion', remuneracion.toString()) : params;

    return this.http
    .get<formularioarm[]>(this.apiUrl+'/FiltrarPasantias/', {params})
    .pipe(retry(1), catchError(this.errorHandler));
    }

    getEspecialidades(): Observable<especialidad[]> {
      console.log('SERVICIO')
      return this.http
        .get<especialidad[]>(this.apiUrl + '/MostrarEspecialidad')
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
