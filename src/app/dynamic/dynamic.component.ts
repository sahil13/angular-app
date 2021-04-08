import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicDirective } from './dynamic.directive';
import { DynamicService } from './dynamic.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  @ViewChild(DynamicDirective, { static: true })
  abc1: DynamicDirective;


  constructor(private dynamicService: DynamicService) {}

  ngOnInit(): void {}

  fetchPosts() {
    const viewContainerRef = this.abc1.viewContainerRef;
    viewContainerRef.clear();
    this.dynamicService.loadComponent(viewContainerRef);
  }
}
