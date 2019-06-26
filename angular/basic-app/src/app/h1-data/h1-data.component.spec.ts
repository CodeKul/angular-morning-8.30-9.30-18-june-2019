import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1DataComponent } from './h1-data.component';

describe('H1DataComponent', () => {
  let component: H1DataComponent;
  let fixture: ComponentFixture<H1DataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1DataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
