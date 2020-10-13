import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'duracion-pasantia',
  templateUrl: './duracion.component.html',
  styleUrls: ['../inputs-style.css']
})
export class DuracionComponent implements OnInit {
  @Input() InputDuracion: number;
  constructor() { }

  ngOnInit(): void {
  }

}
