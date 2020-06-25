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

  backendUrl: string = 'http://localhost:3400/request-sender';
  res;

  /**
   * Sends the request information determined by the user to the
   * error response monitor backend
   */
  sendRequestInfoToBackend(
    urlEndpoint: string,
    httpMethod,
    responseType,
    postBody?: string
  ): Observable<any> {
    return this._httpClient.post(
      this.backendUrl,
      {
        url: `${urlEndpoint}`,
        httpMethod: `${httpMethod}`,
        responseType: `${responseType}`,
        postBody: `${postBody}`,
      },
      { responseType: 'text' }
    );
  }
}
