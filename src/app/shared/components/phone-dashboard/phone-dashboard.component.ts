import { Component, OnInit } from '@angular/core';
import { Iphone } from '../../models/phones';
import { mobileProducts } from '../../const/phone';

@Component({
  selector: 'app-phone-dashboard',
  templateUrl: './phone-dashboard.component.html',
  styleUrls: ['./phone-dashboard.component.scss']
})
export class PhoneDashboardComponent implements OnInit {
phoneArr:Array<Iphone>=[]
  constructor() { }

  ngOnInit(): void {
    this.phoneArr=mobileProducts
  }

}
