import { Component, OnInit } from '@angular/core';
import { rangos } from '../../../environments/environment';

@Component({
  selector: 'app-remuneracion',
  templateUrl: './remuneracion.component.html',
  styleUrls: ['../select-style.css']
})
export class RemuneracionComponent implements OnInit {
  rangos: any[] = rangos;
  constructor() { }

  ngOnInit(): void {
  }

}
