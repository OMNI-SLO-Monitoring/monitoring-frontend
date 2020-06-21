import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { CpuObservationEndpoint, CpuObservationStatus } from 'cpu-monitoring-models';
import { EndpoitsService } from '../endpoits.service';
import { MatDialog } from '@angular/material/dialog';
import { EditObservationEndpointComponent } from '../edit-observation-endpoint/edit-observation-endpoint.component';

@Component({
  selector: 'app-observation-endpoint-item',
  templateUrl: './observation-endpoint-item.component.html',
  styleUrls: ['./observation-endpoint-item.component.scss']
})
export class ObservationEndpointItemComponent implements OnInit {

  @Input() observationEndpoint: CpuObservationEndpoint
  status: Observable<CpuObservationStatus>;

  constructor(
    private socket: Socket,
    private endpointService: EndpoitsService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    // Establish Socket connection with backend
    this.status = this.socket.fromEvent(this.observationEndpoint.id);
  }

  updateEndpoint(endpoitData) {
    this.observationEndpoint.name = endpoitData.name,
    this.observationEndpoint.cpuUtilQueryEndpoint = endpoitData.endpoint,
    this.observationEndpoint.criticalCpuUtilThreshold = endpoitData.threshold,
    this.observationEndpoint.cpuObservationFrequencyMilis = endpoitData.frequency

    this.endpointService.editEndpoint(this.observationEndpoint);
  }

  deleteEndpoint() {
    this.endpointService.deleteEndpoint(this.observationEndpoint);
  }

  edit() {
    this.matDialog.open(EditObservationEndpointComponent, { data: this.observationEndpoint }).afterClosed().subscribe(res => {
      this.updateEndpoint(res);
    })
  }
}
