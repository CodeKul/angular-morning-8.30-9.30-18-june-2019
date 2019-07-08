import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective {

  @HostBinding('style.width.px')
  wd = 200

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
