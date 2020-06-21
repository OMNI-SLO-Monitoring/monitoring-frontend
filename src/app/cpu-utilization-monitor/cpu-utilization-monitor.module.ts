import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpuObserverListComponent } from './cpu-observer-list/cpu-observer-list.component';
import { CpuUtilizationMonitorRoutes } from './cpu-utilization-monitor.routin';
import { EndpoitsService } from './endpoits.service';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ObservationEndpointItemComponent } from './observation-endpoint-item/observation-endpoint-item.component';
import { MaterialModule } from '../material.module';
import { EditObservationEndpointComponent } from './edit-observation-endpoint/edit-observation-endpoint.component';
import { ReactiveFormsModule } from '@angular/forms';


const config: SocketIoConfig = {
  url: "http://localhost:3100",
}

@NgModule({
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
  ],
  providers: [
    EndpoitsService
  ]
})
export class CpuUtilizationMonitorModule { }
