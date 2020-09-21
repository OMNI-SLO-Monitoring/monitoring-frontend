import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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
  backendSenderUrl: string = `${environment.BACKEND_RESPONSE_MONITOR_URL}request-sender`;
  /**
   * Endpoint for fetching all the logs
   */
  backendLogUrl: string = `${environment.BACKEND_RESPONSE_MONITOR_URL}messages`;

  /**
   * Sends the request information determined by the user to the
   * error response monitor backend
   *
   * @returns the data as Observable from the HTTP post request to the respective url of the backend
   * @param urlEndpoint the url endpoint the user has provided in the respective input field
   * @param httpMethod the HTTP method the user has provided in the respective dropdown menu
   * @param expectedResponse the response/HTTP status code the user expects from the HTTP get/post request
   * @param postBody the body for the HTTP post request in case the HTTP post method option has been selected
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
   *
   * @returns the data in form of logs as Observable from the HTTP get request to the respective url of the backend
   */
  fetchAllLogs(): Observable<any> {
    return this._httpClient.get(this.backendLogUrl);
  }
}
