import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Socket, SocketIoModule } from 'ngx-socket-io';
import { ObservationEndpointItemComponent } from './observation-endpoint-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {
  CpuObservationEndpoint,
  CpuObservationStatus,
} from 'cpu-monitoring-models';
import { EndpoitsService } from '../endpoits.service';

describe('ObservationEndpointItemComponent', () => {
  let component: ObservationEndpointItemComponent;
  let fixture: ComponentFixture<ObservationEndpointItemComponent>;
  let mockCpuObservationEndpoint: CpuObservationEndpoint = new CpuObservationEndpoint(
    'mock',
    'mockUrl',
    1,
    1
  );
  let mockSocket = {
    fromEvent: function (id) {
      return;
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObservationEndpointItemComponent],
      providers: [
        {
          provide: Socket,
          useValue: mockSocket,
        },
        {
          provide: CpuObservationEndpoint,
          useValue: mockCpuObservationEndpoint,
        },
        EndpoitsService,
      ],
      imports: [HttpClientModule, MatDialogModule, SocketIoModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationEndpointItemComponent);
    component = fixture.componentInstance;
    component.observationEndpoint = mockCpuObservationEndpoint;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
