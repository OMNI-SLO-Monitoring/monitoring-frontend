import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { SelectionItemComponent } from './selection-item/selection-item.component';
import { EditSelectionComponent } from './edit-selection/edit-selection.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SelectionListComponent, SelectionItemComponent, EditSelectionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  bootstrap: [SelectionListComponent]
})
export class MonitoringSelectionModule { }
