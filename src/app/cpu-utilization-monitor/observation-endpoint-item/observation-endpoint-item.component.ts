import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import {
  CpuObservationEndpoint,
  CpuObservationStatus,
} from 'cpu-monitoring-models';
import { EndpoitsService } from '../endpoits.service';
import { MatDialog } from '@angular/material/dialog';
import { EditObservationEndpointComponent } from '../edit-observation-endpoint/edit-observation-endpoint.component';

@Component({
  selector: 'app-observation-endpoint-item',
  templateUrl: './observation-endpoint-item.component.html',
  styleUrls: ['./observation-endpoint-item.component.scss'],
})
/**
 * component for updating, editing and deleting endpoint items
 */
export class ObservationEndpointItemComponent implements OnInit {
  @Input() observationEndpoint: CpuObservationEndpoint;
  status: Observable<CpuObservationStatus>;

  constructor(
    private socket: Socket,
    private endpointService: EndpoitsService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Establish Socket connection with backend
    this.status = this.socket.fromEvent(this.observationEndpoint.id);
  }
  /**
   * updating the endpoint with new data given
   * @param endpoitData the given endpoint 
   */
  updateEndpoint(endpointData) {
    this.observationEndpoint.name = endpointData.name,
    this.observationEndpoint.cpuUtilQueryEndpoint = endpointData.endpoint,
    this.observationEndpoint.criticalCpuUtilThreshold = endpointData.threshold,
    this.observationEndpoint.minimalCpuUtilThreshold = endpointData.minimal,
    this.observationEndpoint.cpuObservationFrequencyMilis = endpointData.frequency;

    this.endpointService.editEndpoint(this.observationEndpoint);
  }

  /**
   * delete the given endpoint 
   */
  deleteEndpoint() {
    this.endpointService.deleteEndpoint(this.observationEndpoint);
  }
  /**
   * edit the endpoint in a dialog and update it
   * will update only if the dialog was closed via the save button
   * else no update will happen
   */
  edit() {
    this.matDialog
      .open(EditObservationEndpointComponent, {
        data: this.observationEndpoint,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res !== undefined) {
          this.updateEndpoint(res);
        }
      });
  }
}
