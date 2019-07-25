import { TestBed, async, inject } from '@angular/core/testing';

import { MyGuard } from './my.guard';

describe('MyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGuard]
    });
  });

  it('should ...', inject([MyGuard], (guard: MyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
