import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['../inputs-style.css']
})
export class TelefonoComponent implements OnInit {
  @Input() InputTelefono: string;
  @Output() OutputTelefono: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendTelefono(event){
    this.OutputTelefono.emit(event.target.value);
  }
}
