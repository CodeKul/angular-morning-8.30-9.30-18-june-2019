import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoldAlertComponent } from './bold-alert.component';

describe('BoldAlertComponent', () => {
  let component: BoldAlertComponent;
  let fixture: ComponentFixture<BoldAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoldAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoldAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
