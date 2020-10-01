import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'legajo',
  templateUrl: './legajo.component.html',
  styleUrls: ['../inputs-style.css']
})
export class LegajoComponent implements OnInit {
  @Output() OutputLegajo: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendLegajo(event){
    this.OutputLegajo.emit(event.target.value);
  }
}
