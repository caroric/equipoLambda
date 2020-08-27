import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspecialidadesComponent } from './Selects/especialidades/especialidades.component';
import { HomeComponent } from './Screens/home/home.component';
import { AnioAlumnoComponent } from './Selects/anio-alumno/anio-alumno.component';
import { RemuneracionComponent } from './Selects/remuneracion/remuneracion.component';

@NgModule({
  declarations: [
    AppComponent,
    EspecialidadesComponent,
    HomeComponent,
    AnioAlumnoComponent,
    RemuneracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
