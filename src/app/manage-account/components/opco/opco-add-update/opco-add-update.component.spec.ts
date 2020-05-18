import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoAddUpdateComponent } from './opco-add-update.component';

describe('OpcoAddUpdateComponent', () => {
  let component: OpcoAddUpdateComponent;
  let fixture: ComponentFixture<OpcoAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcoAddUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcoAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
