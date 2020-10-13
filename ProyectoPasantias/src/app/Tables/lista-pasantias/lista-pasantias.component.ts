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
  @Output() OutputSolicitud: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() OutputPasantia: EventEmitter<any> = new EventEmitter<any>();
  verPasantias: boolean=true;
  verInfoPasantia: boolean = false;
  item: any;
  pageActual: number = 1;

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

  solicitarPedidoPasantia(pasantia: any){
    console.log('****lista-pasantias/solicitar pasantia');
    console.log(pasantia);
    this.OutputSolicitud.emit(false);
    this.OutputPasantia.emit(pasantia);
  }
}
