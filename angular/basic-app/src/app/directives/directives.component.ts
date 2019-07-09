import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  stl = {
    border: '1px solid red'
  }

  isVb = true
  mobiles = [
    { name: 'HTC', os: 'android' },
    { name: 'Apple', os: 'iOS' },
    { name: 'Motorola', os: 'android' },
    { name: 'BB', os: 'rim' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
