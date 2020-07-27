import { TestBed } from '@angular/core/testing';

import { MonitoringSelectionService } from './monitoring-selection.service';

describe('MonitoringSelectionService', () => {
  let service: MonitoringSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
