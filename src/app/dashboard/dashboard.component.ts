import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../common/posts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
