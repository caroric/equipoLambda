import { Component, OnInit, Input } from '@angular/core';
import { formularioarmxalumno } from '../../Models/formularioarmxalumno';

@Component({
  selector: 'app-pedidos-pasantia',
  templateUrl: './pedidos-pasantia.component.html',
  styleUrls: ['../lista-pasantias/lista-pasantias.component.css']
})
export class PedidosPasantiaComponent implements OnInit {
  @Input() InputPedidos: any;
  pageActual: number = 1;
  notificacionEnviada=false;
  inputComentarios: boolean = false;
  verTabla=true;
  verInfoSolicitud=false;
  solicitud: any;
  constructor() { }

  ngOnInit(): void {
  }

  receiveComentarios($event){
    console.log('comentarios');
    console.log($event);
  }

  aceptarPedido(){
    //llamar al servicio.
    //this.notificacionEnviada=true;
    console.log('***Aceptar click')
  }

  rechazarSolicitud(){
    this.verTabla=false;
    this.inputComentarios = true;
  }

  volver(){
    this.inputComentarios = false;
    this.verTabla = true;
  }

  confirmar(){
    //document.getElementById('a-confirmar').click();
  }

  closeModal(){
    document.getElementById('a-ok').click();
  }

  verInfoPedido(pedido: any){
    console.log('Solicitud pasantia:');
    console.log(pedido);
    this.solicitud = pedido;
    this.verTabla = false;
    this.verInfoSolicitud=true;
  }

  volverDesdeInfo(){
    this.verInfoSolicitud = false;
    this.verTabla = true;
  }
}
