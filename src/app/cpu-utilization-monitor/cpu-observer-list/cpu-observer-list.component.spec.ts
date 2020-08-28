import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuObserverListComponent } from './cpu-observer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { EndpoitsService } from '../endpoits.service';
import { ObservationEndpointItemComponent } from '../observation-endpoint-item/observation-endpoint-item.component';
import { EditObservationEndpointComponent } from '../edit-observation-endpoint/edit-observation-endpoint.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { CpuUtilizationMonitorRoutes } from '../cpu-utilization-monitor.routes';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

const config: SocketIoConfig = {
  url: "http://localhost:3100",
}

describe('CpuObserverListComponent', () => {
  let component: CpuObserverListComponent;
  let fixture: ComponentFixture<CpuObserverListComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CpuObserverListComponent,
        ObservationEndpointItemComponent,
        EditObservationEndpointComponent
      ],
      imports: [
        CommonModule,
        MaterialModule,
        CpuUtilizationMonitorRoutes,
        SocketIoModule.forRoot(config),
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        EndpoitsService
      ]
    }).compileComponents().then(() => {
      httpTestingController = TestBed.get(HttpTestingController);
      fixture = TestBed.createComponent(CpuObserverListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();

    // I don't know where the call to this url actually comes from when executing this test!
    // The socket.io module import can be commented out and the test still works...
    httpTestingController.expectOne(
      'http://localhost:3100/'
    ).flush('');
  });
});
