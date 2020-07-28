import { TestBed } from '@angular/core/testing';
import { MonitoringSelectionDTO } from './dto/monitoring-selection.dto';
import { MonitoringSelectionService } from './monitoring-selection.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MonitoringSelectionService', () => {
  let httpMock: HttpTestingController;
  let service: MonitoringSelectionService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[MonitoringSelectionService]
    });
    service = TestBed.inject(MonitoringSelectionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  const selectedServicesMock: MonitoringSelectionDTO [] = [{
    name: 'service1',
    id:'1',
    serviceUrl: 'service1url'
  }, {
    name: 'service2',
    id:'2',
    serviceUrl: 'service2url'
  }]

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return all selected services", () => {  
  const req = httpMock.expectOne('http://localhost:3400/monitoring-selection');
  req.flush(selectedServicesMock);
  httpMock.verify();
  service.getAllSelectedServices().subscribe(services => {
    expect(services.length).toBe(2);
    expect(services[0].id).toBe(1);
    expect(services[1].id).toBe(2);
  });
  });

});
