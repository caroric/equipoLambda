import { sucursalxempresa } from './sucursalxempresa';
export class formularioarm{
   id_arm: number;
   cantidadPasantes: number;
   cargoACubrir: string;
   codigoArm: string;
   denegacionDebidoA: string;
   duracionMeses: number;
   email: string;
   estudiante_docente?: number;
   experencia: string;
   fehcaAlta: Date;
   fechaBaja: Date;
   horaInicio: Date;
   horaFin: Date;
   lugarTrabajo: string;
   otrosConocimientos: string;
   otrosRequisitos: string;
   perfilSolicitado: string;
   remuneracion: number;
   seOfrece: string;
   id_genero: number;
   id_cantidadAños: number;
   id_estado: number;
   id_sucursal: number;
   sucursal: sucursalxempresa;
}