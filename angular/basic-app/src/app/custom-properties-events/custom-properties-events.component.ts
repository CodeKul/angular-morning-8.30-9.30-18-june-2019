import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-properties-events',
  templateUrl: './custom-properties-events.component.html',
  styleUrls: ['./custom-properties-events.component.css']
})
export class CustomPropertiesEventsComponent implements OnInit {

  @Input()
  defProg: number

  strPrg : string

  @Output()
  onProgress: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.strPrg = `${this.defProg}%`
  }

  onOperation(btn: number) {
    if (btn == 1) {
        // plus btn
        ++this.defProg
    } else {
      // minus
      --this.defProg
    }
    this.strPrg = `${this.defProg}%`
    this.onProgress.emit(this.defProg)
  }
}
