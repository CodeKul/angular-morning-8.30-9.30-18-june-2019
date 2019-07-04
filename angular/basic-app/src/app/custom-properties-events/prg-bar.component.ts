import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-prg-bar',
  template: `
    <div class="row mt-3">
      <div class="col-md-12">
        <div class="progress">
          <div 
            class="progress-bar" 
            role="progressbar" 
            [style.width]="strPrg" 
            [attr.aria-valuenow]="defPrg" 
            [attr.aria-valuemin]="0"
            [attr.aria-valuemax]="100">{{strPrg}}</div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PrgBarComponent implements OnInit, OnChanges {

  @Input()
  defPrg : number

  strPrg : string

  constructor() { }

  ngOnInit() {
    this.strPrg = `${this.defPrg}%`
  }

  ngOnChanges() {
    this.strPrg = `${this.defPrg}%`
  }
}
