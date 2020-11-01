import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { formularioarmxalumno } from '../../Models/formularioarmxalumno';
import { ResponsableService } from '../../Services/responsable.service';
import { ModalServiceService } from '../../Services/modal-service.service';
import { ModalDialogComponent } from 'src/app/Screens/modal-dialog/modal-dialog.component';
@Component({
  selector: 'app-pedidos-pasantia',
  templateUrl: './pedidos-pasantia.component.html',
  styleUrls: ['../lista-pasantias/lista-pasantias.component.css']
})
export class PedidosPasantiaComponent implements OnInit {
  @Input() InputPedidos: any;
  @Input() InputLegajo: number;
  @Output() OutputReload: EventEmitter<boolean> = new EventEmitter<boolean>();
  pageActual: number = 1;
  notificacionEnviada=false;
  inputComentarios: boolean = false;
  verTabla=true;
  verInfoSolicitud=false;
  solicitud: any;
  comentarios: string;
  constructor(private service: ResponsableService,
              private modalService: ModalServiceService) { }

  ngOnInit(): void {
  }

  receiveComentarios($event){
    this.comentarios = $event;
    console.log('comentarios');
    console.log($event);
  }

  aceptarPedido(solicitud: any){
    this.modalService.Alert('Se ha enviado un mail a la empresa y al alumno para notificarles la confirmación de la solicitud.', 'Solicitud aceptada')
    setTimeout(() => {
      this.OutputReload.emit(true);
    }, 2000);

    this.solicitud = solicitud;
    console.log('solicitud')
    console.log(this.solicitud);
    console.log(this.InputLegajo);
    let armModificado: formularioarmxalumno = new formularioarmxalumno();
    armModificado.legajo_responsable = +this.InputLegajo;
    armModificado.id_estado = 2;
    
    armModificado.fecha_solicitud = this.solicitud.fecha_solicitud;
    armModificado.id_formularioArm = this.solicitud.id_formularioArm;
    armModificado.legajo_alumno = +this.solicitud.legajo_alumno;
    armModificado.id_formularioArmXalumno = this.solicitud.id_formularioArmXalumno;
    let fecha: Date = new Date();
    armModificado.fecha_respuesta = fecha;
    this.service.updateArmxAlumno(armModificado)
    .subscribe((response) => {
      //this.OutputReload.emit(true);
      
    });
  }

  rechazarSolicitud(solicitud: any){
    this.solicitud = solicitud;
    this.verTabla=false;
    this.inputComentarios = true;
  }

  volver(){
    this.inputComentarios = false;
    this.verTabla = true;
  }

  confirmar(){
    this.modalService.Alert('Se ha enviado un mail al alumno para notificarle acerca del rechazo de la solicitud.', 'Solicitud rechazada')
    setTimeout(() => {
      this.OutputReload.emit(true);
      this.inputComentarios = false;
      this.verTabla = true;
    }, 2000);

    console.log('solicitud')
    console.log(this.solicitud);
    console.log(this.InputLegajo);
    let armModificado: formularioarmxalumno = new formularioarmxalumno();
    armModificado.legajo_responsable = +this.InputLegajo;
    armModificado.id_estado = 3;
    
    armModificado.fecha_solicitud = this.solicitud.fecha_solicitud;
    armModificado.id_formularioArm = this.solicitud.id_formularioArm;
    armModificado.legajo_alumno = +this.solicitud.legajo_alumno;
    armModificado.id_formularioArmXalumno = this.solicitud.id_formularioArmXalumno;
    let fecha: Date = new Date();
    armModificado.fecha_respuesta = fecha;
    armModificado.observacion = this.comentarios;
    this.service.updateArmxAlumno(armModificado)
    .subscribe((response) => {
    /* this.OutputReload.emit(true);
      this.inputComentarios = false;
      this.verTabla = true;*/
    });
  }
  
  verInfoPedido(pedido: any){
    console.log('Solicitud pasantia:');
    console.log(pedido);
    this.solicitud = pedido;
    console.log('SOLICITUD')
    console.log(this.solicitud);
    this.verTabla = false;
    this.verInfoSolicitud=true;
  }

  volverDesdeInfo(){
    this.verInfoSolicitud = false;
    this.verTabla = true;
  }
}
