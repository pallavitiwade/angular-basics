import { Component, Input, OnInit } from '@angular/core';
import { Iphone } from '../../models/phones';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
@Input()getphone!:Iphone
  constructor() { }

  ngOnInit(): void {
  }

}
