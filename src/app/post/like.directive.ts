import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLike]'
})
export class LikeDirective {
  constructor(private ref: ElementRef) {}

  @HostListener('mouseover') onmouseover() {
    this.ref.nativeElement.style.background = 'red';
    this.ref.nativeElement.style.color = '#fff';
  }
}
