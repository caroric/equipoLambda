import { Component, OnInit } from '@angular/core';
import { especialidades } from '../../../environments/environment';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['../select-style.css']
})
export class EspecialidadesComponent implements OnInit {
  especialidades: any[] = especialidades;
  constructor() { }

  ngOnInit(): void {
  }
}
