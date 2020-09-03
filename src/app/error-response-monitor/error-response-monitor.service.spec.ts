import { TestBed } from '@angular/core/testing';
import {environment} from '../../environments/environment';

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
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.inject(ErrorResponseMonitorService);
  });

  afterEach(() => {
    httpMock.verify();
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

    const mockRequest = httpMock.expectOne(`${environment.BACKEND_RESPONSE_MONITOR_URL}messages`);
    mockRequest.flush(mockLogs);
  });

  /**
   * Test function to probe the functionality of the sendRequestInfoToBackend
   * operation that returns the fetched data based on the request parameters
   */
  it('should send the request parameters to backend', () => {
    const expectedData = 31;
    service
      .sendRequestInfoToBackend(
        `${environment.BACKEND_DB_SERVICE_URL}request-handler/balance`,
        'get',
        31,
        null
      )
      .subscribe((res) => {
        expect(res).toEqual(expectedData);
      });
    const mockRequest = httpMock.expectOne(
      `${environment.BACKEND_RESPONSE_MONITOR_URL}request-sender`
    );
    mockRequest.flush(31);
  });
});
