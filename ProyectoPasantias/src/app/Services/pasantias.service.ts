import { Injectable } from '@angular/core';
import { especialidadxarm } from '../Models/especialidadxarm';
import { especialidad } from '../Models/especialidad';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { cantidadaniospasante } from '../Models/cantidadAnios';

@Injectable({
  providedIn: 'root'
})
export class PasantiasService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'https://localhost:5001/api/home'
    //this.apiUrl='http://40.124.53.142/api/home'
   }
  httpOptions = {
    headers: new HttpHeaders({
      Content_Type: 'application/json; charset=utf-8',
      
    }),
  };

  getPasantiasConFiltro(idEspecialidad: number = 0,
    cantidadAnios: number = 0,
    remuneracion: number = 0): Observable<especialidadxarm[]> {
    /*let params = new HttpParams();
    params = especialidad ? params.append('id_especialidad', especialidad.toString()) : params;
    params = cantidadAnios ? params.append('cantidad_años', cantidadAnios.toString()) : params;
    params = remuneracion ? params.append('remuneracion', remuneracion.toString()) : params;*/

    return this.http
    .get<especialidadxarm[]>(this.apiUrl+'/FiltrarPasantias/'+idEspecialidad+'/'+cantidadAnios+'/'+remuneracion)
    .pipe(retry(1), catchError(this.errorHandler));
    }

    getEspecialidades(): Observable<especialidad[]> {
      console.log('SERVICIO')
      return this.http
        .get<especialidad[]>(this.apiUrl + '/MostrarEspecialidad')
        .pipe(retry(1), catchError(this.errorHandler));
    }

    getAniosPasante(): Observable<cantidadaniospasante[]> {
      console.log('SERVICIO')
      return this.http
        .get<cantidadaniospasante[]>(this.apiUrl + '/MostrarCantidadAños')
        .pipe(retry(1), catchError(this.errorHandler));
    }

    getDatosPasantia(idForm: number): Observable<especialidadxarm[]> {
      console.log('SERVICIO')
      return this.http
        .get<especialidadxarm[]>(this.apiUrl + '/MostrarDatoPasantia/'+idForm)
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
