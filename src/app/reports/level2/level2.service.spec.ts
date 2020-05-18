import { TestBed } from '@angular/core/testing';

import { Level2Service } from './level2.service';

describe('Level2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Level2Service = TestBed.get(Level2Service);
    expect(service).toBeTruthy();
  });
});
