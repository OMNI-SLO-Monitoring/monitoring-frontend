import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CpuObservationEndpoint } from 'cpu-monitoring-models';
import { EditObservationEndpointComponent } from '../edit-observation-endpoint/edit-observation-endpoint.component';
import { EndpoitsService } from '../endpoits.service';

@Component({
  selector: 'app-cpu-observer-list',
  templateUrl: './cpu-observer-list.component.html',
  styleUrls: ['./cpu-observer-list.component.scss']
})
/**
 * component to add a cpu observation endpoint to list of observed endpoints
 */
export class CpuObserverListComponent {

  constructor(public endpointService: EndpoitsService, private matDialog: MatDialog) { }

  /**
   * creates a  new CpuObservationEndpoint object and hands it to endpointsService where its saved and can be started for observation.
   * 
   * @param endpointData CpuObservationEndpoint object as an observation endpoint
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
   * opens dialog and adds endpoint after the dialog was closed by user
   *
   * only adds endpoint if the res is not undefined
   * response is undefined if the dialog was closed without saving the data (e.g. close(cancel) button was clicked)
   */
  add() {
    this.matDialog.open(EditObservationEndpointComponent).afterClosed().subscribe(res => {
      if (res !== undefined) {
        this.addObservationEndpoint(res);
      }
    })
  }
}
