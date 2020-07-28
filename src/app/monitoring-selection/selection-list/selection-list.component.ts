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

  // services to be monitored
  selectedServices = [];

  constructor(private matDialog: MatDialog, public monitoringSelectionService: MonitoringSelectionService) { }

  /**
   * On init gets all services currently monitored
   */
  ngOnInit(): void {
    this.monitoringSelectionService.getAllSelectedServices().subscribe(res => {
      this.selectedServices = res;
    });
  }

  /**
   * Sends the service that was selected to be monitored
   */
  async add() {
    this.matDialog.open(EditSelectionComponent).afterClosed().subscribe(async (selectedService) => {
      await this.monitoringSelectionService.addSelection(selectedService);
      this.monitoringSelectionService.getAllSelectedServices().subscribe((res) => {
        this.selectedServices.length = 0;
        this.selectedServices = res;
      });
    });
  }
}
