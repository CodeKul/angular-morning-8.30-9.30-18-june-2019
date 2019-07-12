import { DataServiceService } from './data-service.service';
import { IotServiceService } from './iot-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class MyServiceService {

  count = 0
  constructor(
    private data : DataServiceService,
    private iot : IotServiceService
  ) { }
}
