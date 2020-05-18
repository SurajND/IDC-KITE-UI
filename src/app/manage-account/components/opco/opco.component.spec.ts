import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoComponent } from './opco.component';

describe('OpcoComponent', () => {
  let component: OpcoComponent;
  let fixture: ComponentFixture<OpcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
