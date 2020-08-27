// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const especialidades: any[] = [
  { especialidad: 'Civil', idEsp:1},
  { especialidad: 'Eléctrica', idEsp:2},
  { especialidad: 'Electrónica', idEsp:3},
  { especialidad: 'Industrial', idEsp:4},
  { especialidad: 'Mecánica', idEsp:5},
  { especialidad: 'Metalúrgica', idEsp:6},
  { especialidad: 'Química', idEsp:7},
  { especialidad: 'Sistemas de información', idEsp:8},
]

export const aniosCursado: any[] = [
  { descripcion: 'Primero', id:1}, 
  { descripcion: 'Segundo', id:2},
  { descripcion: 'Tercero', id:3},
  { descripcion: 'Cuarto', id:4},
  { descripcion: 'Quinto', id:5},
  { descripcion: 'Sexto', id:6} 
]

export const rangos: any[]=[
  { rango: 'Entre $10000 y $20000', id:1},
  { rango: 'Entre $20000 y $30000', id:2}
]

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
