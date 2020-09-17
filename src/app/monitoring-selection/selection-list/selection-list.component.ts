import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditSelectionComponent } from '../edit-selection/edit-selection.component';
import { MonitoringSelectionService } from '../monitoring-selection.service';

/**
 * Handles the list of all monitored services
 */
@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss'],
})
export class SelectionListComponent {
  constructor(
    private matDialog: MatDialog,
    public monitoringSelectionService: MonitoringSelectionService
  ) {}

  /**
   * Sends the service that was selected to be monitored to the backend which
   * subsequently registers it in the database. Thereupon the new list of services
   * in the database is fetched through the backend
   */
  async add() {
    this.matDialog
      .open(EditSelectionComponent, {
        hasBackdrop: true,
      })
      .afterClosed()
      .subscribe(async (selectedService) => {
        if (!(selectedService === undefined)) {
          await this.monitoringSelectionService.addSelection(selectedService);
          window.location.reload();
        }
      });
  }
}
