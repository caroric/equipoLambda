import { Component, OnInit, Input } from '@angular/core';
import { Pasantia } from '../../Models/Pasantia';

@Component({
  selector: 'app-lista-pasantias',
  templateUrl: './lista-pasantias.component.html',
  styleUrls: ['./lista-pasantias.component.css']
})
export class ListaPasantiasComponent implements OnInit {
  @Input() InputPasantias: Pasantia[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  verDatosPasantia(pas: any){
    console.log('Pasantia --> ' + pas);
  }
}
