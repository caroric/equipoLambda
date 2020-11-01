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
import { PedidosPasantiaComponent } from './Tables/pedidos-pasantia/pedidos-pasantia.component';
import { ComentariosComponent } from './Inputs/comentarios/comentarios.component';
import { AlumnosService } from '../app/Services/alumnos.service';
import { EspecialidadComponent } from '../app/Inputs/especialidad/especialidad.component';
import { NombreComponent } from '../app/Inputs/nombre/nombre.component';
import { ApellidoComponent } from '../app/Inputs/apellido/apellido.component';
import { EmailComponent } from '../app/Inputs/email/email.component';
import { TelefonoComponent } from '../app/Inputs/telefono/telefono.component';
import { RazonSocialComponent} from '../app/Inputs/razon-social/razon-social.component';
import { NombreSucursalComponent } from '../app/Inputs/nombre-sucursal/nombre-sucursal.component';
import { PerfilComponent } from '../app/Inputs/perfil/perfil.component';
import { DuracionComponent } from '../app/Inputs/duracion/duracion.component';
import { InputRemuneracionComponent } from '../app/Inputs/input-remuneracion/input-remuneracion.component';
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalDialogComponent } from './Screens/modal-dialog/modal-dialog.component';


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
    LegajoComponent,
    PedidosPasantiaComponent,
    ComentariosComponent,
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
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModalModule
  ],
  providers: [
    PasantiasService,
    AlumnosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
