import { Component, Input, OnInit } from '@angular/core';
import { Iposts } from '../../models/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
@Input()getposts!:Iposts
  constructor() { }

  ngOnInit(): void {
  }

}
