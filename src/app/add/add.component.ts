import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor() {}
  c;
  ngOnInit(): void {}

  sum(a, b) {
    return a + b;
  }
}
