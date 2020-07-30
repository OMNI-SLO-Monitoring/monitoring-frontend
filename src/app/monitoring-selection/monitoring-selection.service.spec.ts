import { TestBed } from '@angular/core/testing';
import { MonitoringSelectionDTO } from './dto/monitoring-selection.dto';
import { MonitoringSelectionService } from './monitoring-selection.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MonitoringSelectionService', () => {
  let service: MonitoringSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonitoringSelectionService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MonitoringSelectionService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
