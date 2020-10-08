import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['../inputs-style.css']
})
export class EmailComponent implements OnInit {
  @Input() InputMail: string;
  @Output() OutputMail: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMail(event){
    this.OutputMail.emit(event.target.value);
  }
}
