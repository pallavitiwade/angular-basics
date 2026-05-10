import { Component, OnInit,Input} from '@angular/core';
import { Imovie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
@Input()getmovie!:Imovie
  constructor() { }

  ngOnInit(): void {
  
  }

}
