import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: 'like.component.html',
  styleUrls: ['like.component.scss']
})
export class LikeComponent {
  @Input() flg: boolean;

  @Output() like = new EventEmitter();

  constructor() {
    // console.log(this.item);
  }
  pressLike() {
    this.flg = this.flg ? false : true;
    this.like.emit(this.flg);
  }
}
