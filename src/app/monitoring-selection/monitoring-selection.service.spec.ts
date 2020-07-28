import { TestBed } from '@angular/core/testing';
import { MonitoringSelectionDTO } from './dto/monitoring-selection.dto';
import { MonitoringSelectionService } from './monitoring-selection.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('MonitoringSelectionService', () => {
  let httpMock: HttpTestingController;
  let service: MonitoringSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MonitoringSelectionService],
    });
    service = TestBed.inject(MonitoringSelectionService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
