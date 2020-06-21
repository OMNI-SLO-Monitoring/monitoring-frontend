import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CpuObservationEndpoint } from 'cpu-monitoring-models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpoitsService {

  api = "http://localhost:3100";

  observationEndpointsObs: Observable<CpuObservationEndpoint[]>;

  constructor(private http: HttpClient) {
    this.getObservationEndpoints();
  }

  getObservationEndpoints() {
    this.observationEndpointsObs = this.http.get<CpuObservationEndpoint[]>(this.api);
  }

  addEndpoint(endpoint: CpuObservationEndpoint) {
    this.observationEndpointsObs = this.http.post<CpuObservationEndpoint[]>(this.api, endpoint);
  }

  editEndpoint(endpoint: CpuObservationEndpoint) {
    this.observationEndpointsObs = this.http.post<CpuObservationEndpoint[]>(`${this.api}/edit`, endpoint);
  }

  deleteEndpoint(endpoint: CpuObservationEndpoint) {
    this.observationEndpointsObs = this.http.post<CpuObservationEndpoint[]>(`${this.api}/delete`, endpoint);
  }
}
