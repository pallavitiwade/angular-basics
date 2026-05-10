import { Component, OnInit } from '@angular/core';
import { Iposts } from 'src/app/shared/models/posts';
import { postData} from '../../const/post';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  postArr:Array<Iposts>=[]
  constructor() { }

  ngOnInit(): void {
    this.postArr=postData
  }

}
