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
/**
 * component to add a cpu observation endpoint to a list
 */
export class CpuObserverListComponent {

  constructor(public endpointService: EndpoitsService, private matDialog: MatDialog) {}

  /**
   * create an CpuObservationEndpoint object and send it via post request to the endpoint
   * @param endpoitData CpuObservationEndpoint object as an observation endpoint
   */
  addObservationEndpoint(endpointData) {
    const endpoint = new CpuObservationEndpoint(
      endpointData.name,
      endpointData.endpoint,
      endpointData.threshold,
      endpointData.minimal,
      endpointData.frequency,
    );
    this.endpointService.addEndpoint(endpoint);
  }
  /**
   * open dialog and add endpoint after the dialog closes
   *
   * only add endpoint if the res is not defined
   * response is undefined if the dialog was closed without saving the data
   */
  add() {
    this.matDialog.open(EditObservationEndpointComponent).afterClosed().subscribe(res => {
      if (res !== undefined) {
        this.addObservationEndpoint(res);
      }
    })
  }
}
