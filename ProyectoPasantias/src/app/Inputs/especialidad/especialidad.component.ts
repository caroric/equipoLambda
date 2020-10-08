import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['../inputs-style.css']
})
export class EspecialidadComponent implements OnInit {
  @Input() InputEspecialidad: string;
  descripcion: string = 'ingenieria';
  constructor() { }

  ngOnInit(): void {
  }

}
