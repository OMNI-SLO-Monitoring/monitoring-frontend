import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * 
 */
export class MonitoringSelectionService {

  backendUrl = 'http://localhost:3400/monitoring-selection';

  selectedServices = [];
  constructor(private httpClient: HttpClient) { }

  async addSelection(selection: any) {
    console.log('terst');
    const res = await this.httpClient.post(this.backendUrl, selection).subscribe();
    this.getAllSelectedServices();
  }

  deleteSelection(selectionId: string) {
    this.httpClient.delete(this.backendUrl + '/' + selectionId).subscribe();
    this.getAllSelectedServices();
  }


  getAllSelectedServices() {
    this.httpClient.get(this.backendUrl).subscribe((data) => {
      this.selectedServices.length = 0;
      this.selectedServices = this.selectedServices.concat(data);
    });
    console.log(this.selectedServices);
  }
}
