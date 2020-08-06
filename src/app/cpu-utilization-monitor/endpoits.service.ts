import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CpuObservationEndpoint } from 'cpu-monitoring-models';
import { HttpClient } from '@angular/common/http';

/**
 * service for managing endpoints with functions for adding, editing, 
 * deleting and getting all endpoints
 */
@Injectable({
  providedIn: 'root'
})
export class EndpoitsService {

  api = "http://localhost:3100";

  observationEndpointsObs: Observable<CpuObservationEndpoint[]>;

  constructor(private http: HttpClient) {
    this.getObservationEndpoints();
  }

  /**
   * send a get request to http://localhost:3100 and get the list of endpoints
   */
  getObservationEndpoints() {
    this.observationEndpointsObs = this.http.get<CpuObservationEndpoint[]>(this.api);
  }

  /**
   * send post request to http://localhost:3100 and add the endpoint to the list
   * @param endpoint the given cpu endpoint
   */
  addEndpoint(endpoint: CpuObservationEndpoint) {
    this.observationEndpointsObs = this.http.post<CpuObservationEndpoint[]>(this.api, endpoint);
  }

  /**
   * send post request to http://localhost:3100/edit to edit and then update the specified endpoint
   * @param endpoint the given cpu endpoint
   */
  editEndpoint(endpoint: CpuObservationEndpoint) {
    this.observationEndpointsObs = this.http.post<CpuObservationEndpoint[]>(`${this.api}/edit`, endpoint);
  }

  /**
   * send a post request to http://localhost:3100/delete to delete the given endpoint
   * @param endpoint the given cpu endpoint
   */
  deleteEndpoint(endpoint: CpuObservationEndpoint) {
    this.observationEndpointsObs = this.http.post<CpuObservationEndpoint[]>(`${this.api}/delete`, endpoint);
  }
}
