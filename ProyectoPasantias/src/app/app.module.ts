import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspecialidadesComponent } from './Selects/especialidades/especialidades.component';
import { HomeComponent } from './Screens/home/home.component';
import { AnioAlumnoComponent } from './Selects/anio-alumno/anio-alumno.component';
import { RemuneracionComponent } from './Selects/remuneracion/remuneracion.component';
import { PalabrasClaveComponent } from './Inputs/palabras-clave/palabras-clave.component';
import { ListaPasantiasComponent } from './Tables/lista-pasantias/lista-pasantias.component';

import { PasantiasService } from 'src/app/Services/pasantias.service';
import { HttpClientModule } from '@angular/common/http';
import { ProcesarPasantiasComponent } from './Screens/procesar-pasantias/procesar-pasantias.component';
import { LegajoComponent } from './Inputs/legajo/legajo.component';



@NgModule({
  declarations: [
    AppComponent,
    EspecialidadesComponent,
    HomeComponent,
    AnioAlumnoComponent,
    RemuneracionComponent,
    PalabrasClaveComponent,
    ListaPasantiasComponent,
    ProcesarPasantiasComponent,
    LegajoComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PasantiasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
