import { Component,SimpleChanges,OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  str : string
  
  constructor() { }

  ngOnChanges(sm: SimpleChanges) {
    console.log(sm)
  }

  ngOnInit() {
    console.log(`ngOnInit`)
  }

  ngDoCheck() {
    console.log(`ngDoCheck`)
  }
  ngAfterContentInit() {
    console.log(`ngAfterContentInit`)
  }
  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`)
  }
  ngAfterViewInit() {
    console.log(`ngAfterViewInit`)
  }
  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`)
  }
  ngOnDestroy() {
    console.log(`ngOnDestroy`)
  }
}
