import { TestBed } from '@angular/core/testing';

import { ErrorResponseMonitorService } from './error-response-monitor.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LogMessageFormat, LogType } from 'logging-format';

describe('ErrorResponseMonitorService', () => {
  let service: ErrorResponseMonitorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ErrorResponseMonitorService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Test function to probe the functionality of the fetchAllLogs
   * operation with mock logs
   */
  it('should fetch all logs', () => {
    const mockLogs = [
      {
        type: LogType.TIMEOUT,
        time: Date.now(),
        source: 'Database Service',
        detector: 'Price Service',
        data: {
          timeoutDuration: 31,
        },
      },
    ];

    service.fetchAllLogs().subscribe((logs) => {
      expect(logs).toEqual(mockLogs);
    });

    const mockRequest = httpMock.expectOne('http://localhost:3400/messages');
    mockRequest.flush(mockLogs);
  });
});
