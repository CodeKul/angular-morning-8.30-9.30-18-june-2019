import { MyServiceService } from './my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  // providers: [MyServiceService]
})
export class ServicesComponent implements OnInit {

  dspCnt: number
  constructor(
    private service: MyServiceService
  ) { }

  ngOnInit() {
  }

  btnClk() {
    this.dspCnt = this.service.count++
  }
}
