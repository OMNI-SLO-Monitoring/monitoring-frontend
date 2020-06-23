import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogGetterService {
  //url of backend
  logEndpoint: string = 'http://localhost:3400/messages';

  constructor(private httpService: HttpClient) {}

  /**
   * Fetches the log messages from the backend
   */
  fetchLogs(): Observable<any> {
    console.log('Fetched?');
    return this.httpService.get(this.logEndpoint);
  }
}
