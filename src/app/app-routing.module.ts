import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpuObserverListComponent } from './cpu-utilization-monitor/cpu-observer-list/cpu-observer-list.component';
import { ErrorResponseMonitorComponent } from './error-response-monitor/error-response-monitor.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
