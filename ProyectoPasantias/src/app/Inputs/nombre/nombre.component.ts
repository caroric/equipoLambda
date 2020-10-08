import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['../inputs-style.css']
})
export class NombreComponent implements OnInit {
  @Input() InputNombre: string;
  constructor() { }

  ngOnInit(): void {
  }

}
