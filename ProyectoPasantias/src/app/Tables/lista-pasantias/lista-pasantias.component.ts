import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { Pasantia } from '../../Models/Pasantia';
import { especialidadxarm } from '../../Models/especialidadxarm';

@Component({
  selector: 'app-lista-pasantias',
  templateUrl: './lista-pasantias.component.html',
  styleUrls: ['./lista-pasantias.component.css']
})
export class ListaPasantiasComponent implements OnInit {
  @Input() InputPasantias: especialidadxarm[] = [];
  @Output() OutputDatos: EventEmitter<boolean> = new EventEmitter<boolean>();
  verPasantias: boolean=true;
  verInfoPasantia: boolean = false;
  item: any;

  constructor() { }

  ngOnInit(): void {

  }

  verDatosPasantia(pas: any){
    this.item = pas.formularioarm;
    this.verPasantias = false;
    this.verInfoPasantia = true;
    console.log('Pasantia --> ');
    console.log(pas);
    
    this.OutputDatos.emit(false);
  }

  volver(){
    this.verInfoPasantia = false;
    this.verPasantias = true;
    this.OutputDatos.emit(true);
  }

}
