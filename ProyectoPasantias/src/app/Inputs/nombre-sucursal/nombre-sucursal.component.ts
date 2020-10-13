import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nombre-sucursal',
  templateUrl: './nombre-sucursal.component.html',
  styleUrls: ['../inputs-style.css']
})
export class NombreSucursalComponent implements OnInit {
  @Input() InputSucursal: string;
  constructor() { }

  ngOnInit(): void {
  }

}
