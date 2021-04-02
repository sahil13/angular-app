import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPosts]',
})
export class PostDirective implements OnInit {
  constructor(private ref: ElementRef) {}

  ngOnInit() {
    this.ref.nativeElement.addEventListener('mouseover', (e) => {
      this.ref.nativeElement.style.background = '#e1e1e1';
    });
    this.ref.nativeElement.addEventListener('mouseleave', (e) => {
        this.ref.nativeElement.style.background = 'transparent';
      });
  }
}
