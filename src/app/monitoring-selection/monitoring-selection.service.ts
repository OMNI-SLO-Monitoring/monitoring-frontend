import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * Provides the methods for sending requests to the backend regarding
 * monitored services
 */
export class MonitoringSelectionService {

  backendUrl = 'http://localhost:3400/monitoring-selection';

  // array of monitored services objects, is used to display monitored services
  selectedServices = [];
  constructor(private httpClient: HttpClient) { }

  /**
   * Sends a request to the backend to add a service to the database
   *
   * @param selection Service added to be monitored
   */
  async addSelection(selection: any) {
    const res = await this.httpClient.post(this.backendUrl, selection).subscribe();
    this.getAllSelectedServices();
  }
  /**
   * Sends a request to the backend to delete the selected service in the database
   *
   * @param selectionId Id of monitored Service
   */
  deleteSelection(selectionId: string) {
    this.httpClient.delete(this.backendUrl + '/' + selectionId).subscribe();
    this.getAllSelectedServices();
  }

  /**
   * Sends a request to the backend to get all services currently monitored
   */
  getAllSelectedServices() {
    this.httpClient.get(this.backendUrl).subscribe((data) => {
      // Sets array to zero to avoid duplicates
      this.selectedServices.length = 0;
      this.selectedServices = this.selectedServices.concat(data);
    });
  }
}
