import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpuObserverListComponent } from './cpu-utilization-monitor/cpu-observer-list/cpu-observer-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/cpu',
    pathMatch: 'full'
  },
  {
    path: 'cpu',
    loadChildren: () => import('./cpu-utilization-monitor/cpu-utilization-monitor.module').then(m => m.CpuUtilizationMonitorModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
