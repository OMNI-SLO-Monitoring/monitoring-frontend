import { Routes, RouterModule } from "@angular/router";
import { CpuObserverListComponent } from './cpu-observer-list/cpu-observer-list.component';

const routes: Routes = [
    {
        path: '',
        component: CpuObserverListComponent
    }
]

export const CpuUtilizationMonitorRoutes = RouterModule.forChild(routes);