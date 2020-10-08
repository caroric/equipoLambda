import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apellido',
  templateUrl: './apellido.component.html',
  styleUrls: ['../inputs-style.css']
})
export class ApellidoComponent implements OnInit {
  @Input() InputApellido: string;
  constructor() { }

  ngOnInit(): void {
  }

}
