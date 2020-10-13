import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['../inputs-style.css']
})
export class PerfilComponent implements OnInit {
  @Input() InputPerfil: string;
  constructor() { }

  ngOnInit(): void {
  }

}
