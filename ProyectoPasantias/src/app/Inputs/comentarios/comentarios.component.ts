import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['../inputs-style.css']
})
export class ComentariosComponent implements OnInit {
  @Output() OutputComentarios: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendComentarios(event){
    this.OutputComentarios.emit(event.target.value);
  }

}
