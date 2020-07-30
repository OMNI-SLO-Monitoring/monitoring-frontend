import { TestBed } from '@angular/core/testing';

import { ErrorResponseMonitorService } from './error-response-monitor.service';
import { HttpClientModule } from '@angular/common/http';

describe('ErrorResponseMonitorService', () => {
  let service: ErrorResponseMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ErrorResponseMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
