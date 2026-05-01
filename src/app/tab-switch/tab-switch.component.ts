import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.scss']
})
export class TabSwitchComponent implements OnInit {
selectedFrameWork:string='express'
  constructor() { }

  ngOnInit(): void {
  }
onTabChange(skill:string){
  this.selectedFrameWork=skill
}





}
