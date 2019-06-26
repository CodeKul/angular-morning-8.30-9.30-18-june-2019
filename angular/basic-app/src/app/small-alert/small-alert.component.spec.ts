import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallAlertComponent } from './small-alert.component';

describe('SmallAlertComponent', () => {
  let component: SmallAlertComponent;
  let fixture: ComponentFixture<SmallAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
