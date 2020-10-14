export class formularioarmxalumno{
   id_formularioArmXalumno: number;
   id_formularioArm: number;
   legajo_alumno: number;
   fecha_solicitud: Date;
   fecha_respuesta: Date;
   legajo_responsable: number;
   id_estado: number;
   observacion: string;
   
   setIdArm(id: number){
      this.id_formularioArm = id;
   }
   setLegajoAlumno(legajo: number){
      this.legajo_alumno = legajo;
   }
   setFechaSolicitud(fecha:Date){
      this.fecha_solicitud = fecha;
   }
   setFechaRespuesta(fecha: Date){
      this.fecha_respuesta = fecha;
   }
   setLegajoResponsable(legajo: number){
      this.legajo_responsable = legajo;
   }
   setEstado(id: number){
      this.id_estado = id;
   }
   setObservaciones(obs: string){
      this.observacion = obs;
   }
}