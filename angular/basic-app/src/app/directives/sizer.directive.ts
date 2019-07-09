import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective {

  @Input('appSizer')
  @HostBinding('style.width.px')
  wd?: number

  constructor() { }

  @HostListener('mouseenter')
  abcMouse() {
    this.wd = 400
  }

  @HostListener('mouseleave')
  pqrMouse() {
    this.wd = 200
  }
}
