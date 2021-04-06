import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class PostDirective implements OnInit {
  constructor(private ref: ElementRef, private renderer: Renderer2) {}
 /*  @HostListener('mouseover') onMouseOver() {
    this.ChangeBgColor('red');
  }

  @HostListener('click') onClick() {
    this.ChangeBgColor('blue');
  }
 */
  @HostListener('input') onInput() {
    const a = this.ref.nativeElement.value;
    this.ref.nativeElement.value = a.toUpperCase();
    // this.renderer.setStyle(this.ref.nativeElement, 'width', '200px');
  }

  ChangeBgColor(color: string) {
    this.renderer.setStyle(this.ref.nativeElement, 'color', color);
  }
  ngOnInit() {
    /* this.ref.nativeElement.addEventListener('mouseover', (e) => {
      let a =  this.ref.nativeElement.innerHTML;
      a = a.replace(/ /g, '');
      this.ref.nativeElement.innerHTML = a.toUpperCase();
    }); */
    /* this.ref.nativeElement.addEventListener('mouseleave', (e) => {
        this.ref.nativeElement.style.background = 'transparent';
      }); */
  }
}
