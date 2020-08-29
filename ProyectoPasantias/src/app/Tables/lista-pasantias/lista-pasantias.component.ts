import { Component, OnInit, Input } from '@angular/core';
import { Pasantia } from '../../Models/Pasantia';


@Component({
  selector: 'app-lista-pasantias',
  templateUrl: './lista-pasantias.component.html',
  styleUrls: ['./lista-pasantias.component.css']
})
export class ListaPasantiasComponent implements OnInit {
  @Input() InputPasantias: Pasantia[] = [];

  verPasantias: boolean=true;
  verInfoPasantia: boolean = false;
  pasantiaSeleccionada: Pasantia;
  constructor() { }

  ngOnInit(): void {

  }

  verDatosPasantia(pas: any){
    this.pasantiaSeleccionada = pas;
    this.verPasantias = false;
    this.verInfoPasantia = true;
    console.log('Pasantia --> ');
    console.log(pas)
  }

  volver(){
    this.verInfoPasantia = false;
    this.verPasantias = true;
  }

}
