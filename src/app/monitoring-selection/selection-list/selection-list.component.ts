import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditSelectionComponent } from '../edit-selection/edit-selection.component';
import { MonitoringSelectionService } from '../monitoring-selection.service';
import { MonitoringSelectionDTO } from '../dto/monitoring-selection.dto';

/**
 * Handles the list of all monitored services
 */
@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss'],
})
export class SelectionListComponent implements OnInit {
  // services to be monitored
  selectedServices: MonitoringSelectionDTO[] = [];

  constructor(
    private matDialog: MatDialog,
    public monitoringSelectionService: MonitoringSelectionService
  ) {}

  /**
   * Upon initialization, the list of services that are to be monitored
   * are fetched from the database through the backend
   */
  ngOnInit(): void {
    this.monitoringSelectionService
      .getAllSelectedServices()
      .subscribe((res) => {
        console.log(res);
        this.selectedServices = res;
      });
  }

  /**
   * Sends the service that was selected to be monitored to the backend which
   * subsequently registers it in the database. Thereupon the new list of services
   * in the database is fetched through the backend
   */
  async add() {
    this.matDialog
      .open(EditSelectionComponent)
      .afterClosed()
      .subscribe(async (selectedService) => {
        await this.monitoringSelectionService.addSelection(selectedService);
        this.monitoringSelectionService
          .getAllSelectedServices()
          .subscribe((res) => {
            this.selectedServices.length = 0;
            this.selectedServices = res;
          });
      });
  }
}
