import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpuObserverListComponent } from './cpu-observer-list/cpu-observer-list.component';
import { CpuUtilizationMonitorRoutes } from './cpu-utilization-monitor.routes';
import { EndpoitsService } from './endpoits.service';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ObservationEndpointItemComponent } from './observation-endpoint-item/observation-endpoint-item.component';
import { MaterialModule } from '../material.module';
import { EditObservationEndpointComponent } from './edit-observation-endpoint/edit-observation-endpoint.component';
import { ReactiveFormsModule } from '@angular/forms';
import {environment} from '../../environments/environment';


const config: SocketIoConfig = {
  url: environment.BACKEND_CPU_MONITOR_URL,
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
