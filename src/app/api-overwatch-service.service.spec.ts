import { TestBed, inject } from '@angular/core/testing';

import { ApiOverwatchServiceService } from './api-overwatch-service.service';

describe('ApiOverwatchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiOverwatchServiceService]
    });
  });

  it('should be created', inject([ApiOverwatchServiceService], (service: ApiOverwatchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
