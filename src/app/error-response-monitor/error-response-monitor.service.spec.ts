import { TestBed } from '@angular/core/testing';

import { ErrorResponseMonitorService } from './error-response-monitor.service';

describe('ErrorResponseMonitorService', () => {
  let service: ErrorResponseMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorResponseMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
