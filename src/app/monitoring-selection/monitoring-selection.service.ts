import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MonitoringSelectionDTO } from './dto/monitoring-selection.dto';

@Injectable({
  providedIn: 'root',
})
/**
 * Provides the methods for sending requests to the backend regarding
 * monitored services
 */
export class MonitoringSelectionService {
  backendUrl = 'http://localhost:3400/monitoring-selection';

  // array of monitored services objects, is used to display monitored services
  selectedServices: MonitoringSelectionDTO[] = [];
  servicesSubject = new BehaviorSubject<MonitoringSelectionDTO[]>([]);


  constructor(private httpClient: HttpClient) {}

  /**
   * Sends a request to the backend to add a service to the database
   *
   * @param selection Service added to be monitored
   * @returns the http post request as promise
   */
  addSelection(selection: MonitoringSelectionDTO) {
    try {
      this.httpClient.post(this.backendUrl, selection).toPromise();
      this.selectedServices.push(selection);
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
  deleteSelection(selectionId: string) {
    try {
      this.httpClient
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
  getAllSelectedServices() {
    this.httpClient.get(this.backendUrl).subscribe(res => {
      this.selectedServices = res as MonitoringSelectionDTO[];
      this.servicesSubject.next(this.selectedServices);
    })
  }

  /**
   * finds a service with the specified id
   * 
   * @param id of service
   */
  getServiceById(id: string) {
    return this.selectedServices.find(service => service._id == id);
  }
}
