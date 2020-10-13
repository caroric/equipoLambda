import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-remuneracion',
  templateUrl: './input-remuneracion.component.html',
  styleUrls: ['../inputs-style.css']
})
export class InputRemuneracionComponent implements OnInit {
  @Input() InputRemuneracion: number;
  constructor() { }

  ngOnInit(): void {
  }

}
