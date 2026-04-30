import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
selectedSkill:string='javascript'
  constructor() { }

  ngOnInit(): void {
  }

  onTabChange(skill:string){
    this.selectedSkill=skill
  }
}
