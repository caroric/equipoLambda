import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProcesarPasantiasComponent } from '../app/Screens/procesar-pasantias/procesar-pasantias.component';
import { HomeComponent } from '../app/Screens/home/home.component';
const routes: Routes = [
  { path: 'procesarPasantias', component:ProcesarPasantiasComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations:[],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
