import { Component, OnInit } from '@angular/core';
import { aniosCursado } from '../../../environments/environment';

@Component({
  selector: 'app-anio-alumno',
  templateUrl: './anio-alumno.component.html',
  styleUrls: ['../select-style.css']
})
export class AnioAlumnoComponent implements OnInit {
  anios: any[] = aniosCursado;
  constructor() { }

  ngOnInit(): void {
  }
}
