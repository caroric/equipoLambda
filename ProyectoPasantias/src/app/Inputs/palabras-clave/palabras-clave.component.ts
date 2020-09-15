import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-palabras-clave',
  templateUrl: './palabras-clave.component.html',
  styleUrls: ['./palabras-clave.component.css']
})
export class PalabrasClaveComponent {
  palabras: string;
  @Output() OutputPalabra: EventEmitter<string> = new EventEmitter<string>();

  sendPalabrasClave(event){
    this.OutputPalabra.emit(event.target.value);
  }

}
