import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MonitoringSelectionDTO } from './dto/monitoring-selection.dto';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
/**
 * Provides the methods for sending requests to the backend regarding
 * monitored services
 */
export class MonitoringSelectionService {
  backendUrl = `${environment.BACKEND_ISSUE_CREATOR_URL}service-registration`;

  // array of monitored services objects, is used to display monitored services
  selectedServices: MonitoringSelectionDTO[] = [];
  servicesSubject = new BehaviorSubject<MonitoringSelectionDTO[]>([]);


  constructor(private httpClient: HttpClient) {
    this.getAllSelectedServices();
  }

  /**
   * Sends a request to the backend to add a service to the database of the response monitor
   *
   * @param selection Service added to be monitored
   */
  async addSelection(selection: MonitoringSelectionDTO) {
    try {
      const service = await this.httpClient.post(this.backendUrl, selection).toPromise() as MonitoringSelectionDTO;
      console.log(service);
      this.selectedServices.push(service);
    } catch (err) {
      console.log('Backend not available');
    }
  }
  /**
   * Sends a request to the backend to delete the selected service in the database of the response monitor
   *
   * @param selectionId Id of monitored Service
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
   */
  getAllSelectedServices() {
    this.httpClient.get(this.backendUrl + "/all").subscribe(res => {
      this.selectedServices = res as MonitoringSelectionDTO[];
      this.servicesSubject.next(this.selectedServices);
    })
  }

  /**
   * finds a service with the specified id
   * 
   * @param id of service
   * @returns service with matching id or undefined if no service matches id
   */
  getServiceById(id: string) {
    return this.selectedServices.find(service => service._id == id);
  }

  getServiceByUrl(url: string) {
    return this.selectedServices.find(service => service.serviceUrl === url);
  }
}
