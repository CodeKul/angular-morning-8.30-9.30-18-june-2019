import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPropertiesEventsComponent } from './custom-properties-events.component';

describe('CustomPropertiesEventsComponent', () => {
  let component: CustomPropertiesEventsComponent;
  let fixture: ComponentFixture<CustomPropertiesEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPropertiesEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPropertiesEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
