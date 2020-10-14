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
import { LegajoComponent } from './Inputs/legajo/legajo.component';
import { EspecialidadComponent } from './Inputs/especialidad/especialidad.component';
import { NombreComponent } from './Inputs/nombre/nombre.component';
import { ApellidoComponent } from './Inputs/apellido/apellido.component';
import { EmailComponent } from './Inputs/email/email.component';
import { TelefonoComponent } from './Inputs/telefono/telefono.component';
import { RazonSocialComponent } from './Inputs/razon-social/razon-social.component';
import { NombreSucursalComponent } from './Inputs/nombre-sucursal/nombre-sucursal.component';
import { PerfilComponent } from './Inputs/perfil/perfil.component';
import { DuracionComponent } from './Inputs/duracion/duracion.component';
import { InputRemuneracionComponent } from './Inputs/input-remuneracion/input-remuneracion.component';
import { AlumnosService } from '../app/Services/alumnos.service';
@NgModule({
  declarations: [
    AppComponent,
    EspecialidadesComponent,
    HomeComponent,
    AnioAlumnoComponent,
    RemuneracionComponent,
    PalabrasClaveComponent,
    ListaPasantiasComponent,
    LegajoComponent,
    EspecialidadComponent,
    NombreComponent,
    ApellidoComponent,
    EmailComponent,
    TelefonoComponent,
    RazonSocialComponent,
    NombreSucursalComponent,
    PerfilComponent,
    DuracionComponent,
    InputRemuneracionComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PasantiasService,
    AlumnosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
