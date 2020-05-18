import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitmissComponent } from './hitmiss.component';

describe('HitmissComponent', () => {
  let component: HitmissComponent;
  let fixture: ComponentFixture<HitmissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitmissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitmissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
