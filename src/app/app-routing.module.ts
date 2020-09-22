import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorResponseMonitorComponent } from './error-response-monitor/error-response-monitor.component';
import { SelectionListComponent } from './monitoring-selection/selection-list/selection-list.component';

//define what component should be loaded depending on enpoint(path).
const routes: Routes = [
  {
    path: '',
    redirectTo: '/cpu',
    pathMatch: 'full',
  },
  {
    path: 'cpu',
    loadChildren: () =>
      import('./cpu-utilization-monitor/cpu-utilization-monitor.module').then(
        (m) => m.CpuUtilizationMonitorModule
      ),
  },
  {
    path: 'error-response-monitor',
    component: ErrorResponseMonitorComponent,
  },
  {
    path: 'logs',
    loadChildren: () => import('./logging/logging.module').then((m) => m.LoggingModule)
  },
  {
    path: 'monitoring-selection',
    component: SelectionListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
