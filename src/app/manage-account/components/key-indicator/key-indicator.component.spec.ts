import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyIndicatorComponent } from './key-indicator.component';

describe('KeyIndicatorComponent', () => {
  let component: KeyIndicatorComponent;
  let fixture: ComponentFixture<KeyIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
