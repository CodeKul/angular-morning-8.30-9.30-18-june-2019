import { Directive, ElementRef, TemplateRef, Input, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appStrDir]'
})
export class StrDirDirective implements OnInit {

  @Input('appStrDir')
  isTrue: boolean

  constructor(
    private elRf: ElementRef,
    private tmRf: TemplateRef<any>,
    private vcRf: ViewContainerRef
  ) {

  }

  ngOnInit() {
    console.log(this.elRf)
    console.log(this.tmRf)
    console.log(this.vcRf)

    if(!this.isTrue) {
      this.vcRf.createEmbeddedView(this.tmRf)
    }else{
      this.vcRf.clear()
    }
  }
}
