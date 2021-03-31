import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[hide]',
})
export class HideDirective {
  constructor(private ref: ElementRef) {}

  ngOnInit() {
    this.ref.nativeElement.addEventListener('scroll', (e) => {
      this.ref.nativeElement.style.visibility = 'hidden';
    });
  }
}
/*
mouseover
mouseleave
scroll

*/