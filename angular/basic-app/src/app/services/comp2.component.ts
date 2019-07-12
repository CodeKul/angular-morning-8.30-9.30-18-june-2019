import { ComService } from './com.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  bakCol : string = 'rgb(255,0,0)'
  constructor(
    private com : ComService
  ) { }

  ngOnInit() {
    this.com.receiveColor( col => this.bakCol = col.color )
  }
}
