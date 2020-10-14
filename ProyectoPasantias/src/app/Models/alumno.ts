export class alumno{
   nombre: string;
   apellido: string;
   legajo: number;
   id_especialidad: number;
   mail: string;
   nro_telefono: number;
   tipo_telefono: number;

   setNombre(nombre: string){
      this.nombre = nombre;
   }
   setApellido(apellido: string){
      this.apellido = apellido;
   }
   setLegajo(legajo: number){
      this.legajo = legajo;
   }
   setEspecialidad(id:number){
      this.id_especialidad = id;
   }
   setMail(mail:string){
      this.mail=mail;
   }
   setNro(nro:number){
      this.nro_telefono = nro;
   }
   setTipo(tipo:number){
      this.tipo_telefono = tipo;
   }
}