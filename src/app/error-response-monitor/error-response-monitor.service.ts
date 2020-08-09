import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * This service is responsible for sending the request properties the user
 * has determined in the UI to the respective backend of the error response
 * monitor
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorResponseMonitorService {
  constructor(private _httpClient: HttpClient) {}

  /**
   * Endpoint for handling the request blueprint
   */
  backendSenderUrl: string = 'http://localhost:3400/request-sender';
  /**
   * Endpoint for fetching all the logs
   */
  backendLogUrl: string = 'http://localhost:3400/messages';

  /**
   * Sends the request information determined by the user to the
   * error response monitor backend
   */
  sendRequestInfoToBackend(
    urlEndpoint: string,
    httpMethod,
    expectedResponse,
    postBody?: string
  ): Observable<any> {
    return this._httpClient.post(this.backendSenderUrl, {
      url: `${urlEndpoint}`,
      httpMethod: `${httpMethod}`,
      expResponse: `${expectedResponse}`,
      postBody: `${postBody}`,
    });
  }

  /**
   * Fetches all logs from the backend including work check logs
   */
  fetchAllLogs(): Observable<any> {
    return this._httpClient.get(this.backendLogUrl);
  }
}
