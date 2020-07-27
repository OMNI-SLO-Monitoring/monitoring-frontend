import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditSelectionComponent } from '../edit-selection/edit-selection.component';
import { MonitoringSelectionService } from '../monitoring-selection.service';

@Component({
  'selector': 'app-selection-list',
  'templateUrl': './selection-list.component.html',
  'styleUrls': ['./selection-list.component.scss']
})
export class SelectionListComponent implements OnInit {

  constructor(private matDialog: MatDialog, public monitoringSelectionService: MonitoringSelectionService) { }

  ngOnInit(): void {
    this.monitoringSelectionService.getAllSelectedServices();
  }

  addSelection(selectedService) {
    const service = {
      'name': selectedService.name,
      'serviceUrl': selectedService.serviceUrl
    };
    console.log(service);
    this.monitoringSelectionService.addSelection(service);
  }

  add() {
    this.matDialog.open(EditSelectionComponent).afterClosed().subscribe(res => {
      this.addSelection(res);
    });
  }
}
