import { Routes, RouterModule } from '@angular/router';
import { LogTableComponent } from './log-table/log-table.component';

const routes: Routes = [
    {
        path: '',
        component: LogTableComponent
    },
    {
        path: ':id',
        component: LogTableComponent
    }
];

export const LoggingRoutes = RouterModule.forChild(routes);
