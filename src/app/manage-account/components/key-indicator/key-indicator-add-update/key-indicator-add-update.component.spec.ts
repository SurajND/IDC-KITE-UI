import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyIndicatorAddUpdateComponent } from './key-indicator-add-update.component';

describe('KeyIndicatorAddUpdateComponent', () => {
  let component: KeyIndicatorAddUpdateComponent;
  let fixture: ComponentFixture<KeyIndicatorAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyIndicatorAddUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyIndicatorAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
