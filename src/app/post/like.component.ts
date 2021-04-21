import {
  AfterContentInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: 'like.component.html',
  styleUrls: ['like.component.scss']
})
export class LikeComponent implements OnChanges, OnInit, AfterContentInit {
  @Input() flg: boolean;
  @Input() item;
  @Output() like = new EventEmitter();

  message = 'liked message';

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log('onchanges called', changes.item.previousValue);
  }

  ngOnInit(): void {
    console.log('===posts', this.item);
  }

  ngAfterContentInit(){
    console.log('Contentinit called');
  }
  pressLike() {
    this.flg = this.flg ? false : true;
    this.like.emit(this.flg);
  }
}
