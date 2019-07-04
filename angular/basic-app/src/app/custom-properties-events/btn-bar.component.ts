import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-btn-bar',
  template: `
    <div class="row mt-3">
      <div class="col-md-12">
        <input type="button" value="Plus" class="btn btn-info" (click)="onOperation(1)">
        <input type="button" value="Minus" class="btn btn-info" (click)="onOperation(2)">
      </div>
    </div>
  `,
  styles: []
})
export class BtnBarComponent implements OnInit {

  @Input()
  defProg : number

  @Output()
  onProgress: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onOperation(btn: number) {
    if (btn == 1) {
        // plus btn
        ++this.defProg
    } else {
      // minus
      --this.defProg
    }
    this.onProgress.emit(this.defProg)
  }
}
