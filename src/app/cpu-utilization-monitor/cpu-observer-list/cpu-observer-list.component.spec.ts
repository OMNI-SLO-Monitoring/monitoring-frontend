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

const config: SocketIoConfig = {
  url: "http://localhost:3100",
}

describe('CpuObserverListComponent', () => {
  let component: CpuObserverListComponent;
  let fixture: ComponentFixture<CpuObserverListComponent>;

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
        HttpClientModule,
        MatDialogModule
      ],
      providers: [
        EndpoitsService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuObserverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
