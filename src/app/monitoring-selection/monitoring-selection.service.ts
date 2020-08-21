import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
/**
 * Provides the methods for sending requests to the backend regarding
 * monitored services
 */
export class MonitoringSelectionService {
  backendUrl = `${environment.BACKEND_RESPONSE_MONITOR_URL}monitoring-selection`;

  // array of monitored services objects, is used to display monitored services
  selectedServices = [];
  constructor(private httpClient: HttpClient) {}

  /**
   * Sends a request to the backend to add a service to the database
   *
   * @param selection Service added to be monitored
   * @returns the http post request as promise
   */
  addSelection(selection: any): Promise<any> {
    try {
      return this.httpClient.post(this.backendUrl, selection).toPromise();
    } catch (err) {
      console.log('Backend not available');
    }
  }
  /**
   * Sends a request to the backend to delete the selected service in the database
   *
   * @param selectionId Id of monitored Service
   * @returns the http delete request as promise
   */
  deleteSelection(selectionId: string): Promise<any> {
    try {
      return this.httpClient
        .delete(this.backendUrl + '/' + selectionId)
        .toPromise();
    } catch (err) {
      console.log('Backend not available');
    }
  }

  /**
   * Sends a request to the backend to get all services currently monitored
   *
   * @returns the value from the http get request
   */
  getAllSelectedServices(): Observable<any> {
    try {
      return this.httpClient.get(this.backendUrl);
    } catch (err) {
      console.log('Backend not available');
    }
  }
}
