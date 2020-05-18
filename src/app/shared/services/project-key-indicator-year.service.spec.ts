import { TestBed } from '@angular/core/testing';

import { ProjectKeyIndicatorYearService } from './project-key-indicator-year.service';

describe('ProjectKeyIndicatorYearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectKeyIndicatorYearService = TestBed.get(ProjectKeyIndicatorYearService);
    expect(service).toBeTruthy();
  });
});
