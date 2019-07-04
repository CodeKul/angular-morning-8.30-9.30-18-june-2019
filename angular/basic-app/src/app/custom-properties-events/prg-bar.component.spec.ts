import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrgBarComponent } from './prg-bar.component';

describe('PrgBarComponent', () => {
  let component: PrgBarComponent;
  let fixture: ComponentFixture<PrgBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrgBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrgBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
