import { Component, OnInit } from '@angular/core';
import { CpuObservationEndpoint } from 'cpu-monitoring-models';
import { EndpoitsService } from '../endpoits.service';
import { MatDialog } from '@angular/material/dialog';
import { EditObservationEndpointComponent } from '../edit-observation-endpoint/edit-observation-endpoint.component';

@Component({
  selector: 'app-cpu-observer-list',
  templateUrl: './cpu-observer-list.component.html',
  styleUrls: ['./cpu-observer-list.component.scss']
})
export class CpuObserverListComponent {

  constructor(public endpointService: EndpoitsService, private matDialog: MatDialog) {}

  addObservationEndpoint(endpoitData) {
    const endpoint = new CpuObservationEndpoint(
      endpoitData.name,
      endpoitData.endpoint,
      endpoitData.threshold,
      endpoitData.frequency
    );
    this.endpointService.addEndpoint(endpoint);
  }

  add() {
    this.matDialog.open(EditObservationEndpointComponent).afterClosed().subscribe(res => {
      this.addObservationEndpoint(res);
    })
  }
}