import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../models/movie';
import { movieArray } from '../../const/movies';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.scss']
})
export class MoviesDashboardComponent implements OnInit {

  moviesArr:Array<Imovie>=[]
  constructor() { }

  ngOnInit(): void {
    this.moviesArr=movieArray
  }

}
