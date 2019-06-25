import { TestBed } from '@angular/core/testing';

import { HubsService } from './hubs.service';

describe('HubsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HubsService = TestBed.get(HubsService);
    expect(service).toBeTruthy();
  });
});
