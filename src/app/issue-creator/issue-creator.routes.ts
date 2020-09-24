import { RouterModule, Routes } from "@angular/router";
import { IssueCreatorEditComponent } from './issue-creator-edit/issue-creator-edit.component';
import { IssueCreatorListComponent } from './issue-creator-list/issue-creator-list.component';

const routes: Routes = [
    {
        path: '',
        component: IssueCreatorListComponent
    },
    {
        path: 'edit/:id',
        component: IssueCreatorEditComponent
    },
    {
        path: 'edit',
        component: IssueCreatorEditComponent
    }
]

export const IssueCreatorRoutes = RouterModule.forChild(routes);