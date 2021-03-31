import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[hyphen]',
})
export class RemoveHyphenDirective implements OnInit {
  constructor(private ref: ElementRef) {}
  ngOnInit() {
    this.ref.nativeElement.addEventListener('mouseover', (e) => {
      this.ref.nativeElement.style.visibility = 'hidden';
    });
  }
}
