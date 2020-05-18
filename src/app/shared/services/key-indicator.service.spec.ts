import { TestBed } from '@angular/core/testing';

import { KeyIndicatorService } from './key-indicator.service';

describe('KeyIndicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyIndicatorService = TestBed.get(KeyIndicatorService);
    expect(service).toBeTruthy();
  });
});
