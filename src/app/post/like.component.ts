import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: 'like.component.html',
  styleUrls : ['like.component.scss']
})
export class LikeComponent {
  @Input() item: string;
  flg = false;

  @Output() like = new EventEmitter();

  constructor() {
    // console.log(this.item);
  }
  pressLike() {
    this.flg = true;
    this.like.emit('like pressed');
  }
}
