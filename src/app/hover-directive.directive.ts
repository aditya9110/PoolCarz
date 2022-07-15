import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHoverDirective]',
})
export class HoverDirectiveDirective {
  @Input('appHoverDirective') message!: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
  }
  // @HostListener('mouseover') onMouseOver() {
  //   this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#39C0ED');
  // }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#39C0ED');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '');
  }
}
