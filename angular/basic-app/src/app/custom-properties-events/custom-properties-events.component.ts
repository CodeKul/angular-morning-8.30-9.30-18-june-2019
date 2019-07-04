import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-properties-events',
  templateUrl: './custom-properties-events.component.html',
  styleUrls: ['./custom-properties-events.component.css']
})
export class CustomPropertiesEventsComponent implements OnInit {

 
  defProg: number = 60

  constructor() { }

  ngOnInit() {
  
  }
}
