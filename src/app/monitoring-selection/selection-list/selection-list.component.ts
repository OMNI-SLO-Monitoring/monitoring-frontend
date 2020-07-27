import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditSelectionComponent } from '../edit-selection/edit-selection.component';
import { MonitoringSelectionService } from '../monitoring-selection.service';

/**
 * Handles the list of all monitored services
 */
@Component({
  'selector': 'app-selection-list',
  'templateUrl': './selection-list.component.html',
  'styleUrls': ['./selection-list.component.scss']
})
export class SelectionListComponent implements OnInit {

  constructor(private matDialog: MatDialog, public monitoringSelectionService: MonitoringSelectionService) { }

  /**
   * On init gets all services currently monitored
   */
  ngOnInit(): void {
    this.monitoringSelectionService.getAllSelectedServices();
  }

  /**
   * Sends the service that was selected to be monitored
   */
  add() {
    this.matDialog.open(EditSelectionComponent).afterClosed().subscribe(selectedService => {
      this.monitoringSelectionService.addSelection(selectedService);
    });
  }
}
