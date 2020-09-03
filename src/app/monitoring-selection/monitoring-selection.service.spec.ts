import { TestBed } from '@angular/core/testing';
import { MonitoringSelectionDTO } from './dto/monitoring-selection.dto';
import { MonitoringSelectionService } from './monitoring-selection.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MonitoringSelectionService', () => {
  let service: MonitoringSelectionService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonitoringSelectionService],
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(MonitoringSelectionService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();

    httpTestingController.expectOne(
      'http://localhost:3400/monitoring-selection'
    ).flush('[]');
  });
});
