import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterItemComponent } from './footer-item.component';

describe('FooterItemComponent', () => {
  let component: FooterItemComponent;
  let fixture: ComponentFixture<FooterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
