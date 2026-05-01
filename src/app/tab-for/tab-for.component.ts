import { Component, OnInit } from '@angular/core';
import { Itab } from '../shared/models/tab-for';

@Component({
  selector: 'app-tab-for',
  templateUrl: './tab-for.component.html',
  styleUrls: ['./tab-for.component.scss']
})
export class TabForComponent implements OnInit {
tabsArr:Array<Itab>=[
{
  tabTitle:'Angular 14',
  frameWorkName:'angular 14',
  tabContent:'<strong>Angular 14</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officii veritatis ex atque repellat quos ut non accusantium assumenda nam?'
},
{
  tabTitle:'Typescript',
  frameWorkName:'typescript',
  tabContent:'<strong>Typescript</strong>Lorem ipsum dolor sit amet consectetur adipisicing elitex atque repellat quos ut non accusantium assumenda nam?'
},
{
  tabTitle:'Node-js',
  frameWorkName:'node-js',
  tabContent:'<strong>Node-js</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officii veritatis ex atque repellat quos ut non accusantium assumenda nam?'
},
{
  tabTitle:'Express-js',
  frameWorkName:'express-js',
  tabContent:'<strong>Express-js</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officii veritatis ex atque repellat quos ut non accusantium assumenda nam?'
}

]

taboneArr:Array<Itab>=[
{
  tabTitle:'HTML',
  frameWorkName:'html',
  tabContent:'<strong>HTML</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officii veritatis ex atque repellat quos ut non accusantium assumenda nam?'
},
{
  tabTitle:'CSS',
  frameWorkName:'css',
  tabContent:'<strong>CSS</strong>Lorem ipsum dolor sit amet consectetur adipisicing elitex atque repellat quos ut non accusantium assumenda nam?'
},
{
  tabTitle:'Wordpress',
  frameWorkName:'wordpress',
  tabContent:'<strong>Wordpress</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officii veritatis ex atque repellat quos ut non accusantium assumenda nam?'
},
{
  tabTitle:'Bootstrap',
  frameWorkName:'bootstrap',
  tabContent:'<strong>Bootstrap</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officii veritatis ex atque repellat quos ut non accusantium assumenda nam?'
}

]



selectedSkill:string='angular 14'
Skills:string='html'
  constructor() { }

  ngOnInit(): void {}
onTabChange(skill:string){
  this.selectedSkill=skill

}
onTabChanges(web:string){
  this.Skills=web
}

}
