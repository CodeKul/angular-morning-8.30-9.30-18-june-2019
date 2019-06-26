import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-alert',
  template: `
    <p class="alert alert-info">
      This is smallest alert
    </p>
  `,
  styles: []
})
export class SmallAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
