import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procesar-pasantias',
  templateUrl: './procesar-pasantias.component.html',
  styleUrls: ['../home/home.component.css']
})
export class ProcesarPasantiasComponent implements OnInit {
  legajo:string;
  legajoExistente:boolean = true;
  constructor() { }

  receiveLegajo($event){
    this.legajo=$event;
  }

  ngOnInit(): void {
  }

}
