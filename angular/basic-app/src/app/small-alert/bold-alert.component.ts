import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bold-alert',
  template: `
    <p class="alert alert-info">
       <b>This smallest bold alert</b>
    </p>
  `,
  styles: []
})
export class BoldAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
