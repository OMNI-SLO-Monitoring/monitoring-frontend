import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { SelectionItemComponent } from './selection-item/selection-item.component';
import { EditSelectionComponent } from './edit-selection/edit-selection.component';



@NgModule({
  declarations: [SelectionListComponent, SelectionItemComponent, EditSelectionComponent],
  imports: [
    CommonModule
  ]
})
export class MonitoringSelectionModule { }
