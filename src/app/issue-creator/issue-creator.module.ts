import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueCreatorListComponent } from './issue-creator-list/issue-creator-list.component';
import { IssueCreatorListItemComponent } from './issue-creator-list-item/issue-creator-list-item.component';
import { IssueCreatorEditComponent } from './issue-creator-edit/issue-creator-edit.component';
import { MaterialModule } from '../material.module';
import { IssueCreatorRoutes } from './issue-creator.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    IssueCreatorListComponent,
    IssueCreatorListItemComponent,
    IssueCreatorEditComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    IssueCreatorRoutes,
    FormsModule,
    HttpClientModule,
    UtilsModule
  ]
})
export class IssueCreatorModule { }
