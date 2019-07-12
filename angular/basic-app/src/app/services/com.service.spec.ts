import { TestBed } from '@angular/core/testing';

import { ComService } from './com.service';

describe('ComService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComService = TestBed.get(ComService);
    expect(service).toBeTruthy();
  });
});
