import { TestBed } from '@angular/core/testing';

import { IotServiceService } from './iot-service.service';

describe('IotServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IotServiceService = TestBed.get(IotServiceService);
    expect(service).toBeTruthy();
  });
});
