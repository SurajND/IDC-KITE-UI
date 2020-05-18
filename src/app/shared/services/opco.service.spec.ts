import { TestBed } from '@angular/core/testing';

import { OpcoService } from './opco.service';

describe('OpcoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpcoService = TestBed.get(OpcoService);
    expect(service).toBeTruthy();
  });
});
