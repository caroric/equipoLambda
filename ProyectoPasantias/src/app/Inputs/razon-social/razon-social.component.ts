import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'razon-social',
  templateUrl: './razon-social.component.html',
  styleUrls: ['../inputs-style.css']
})
export class RazonSocialComponent implements OnInit {
  @Input() InputRazonSocial: string;
  constructor() { }

  ngOnInit(): void {
  }

}
