import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    responseType
  ): Observable<any> {
    return this._httpClient.post(this.backendUrl, {
      url: `${urlEndpoint}`,
      httpMethod: `${httpMethod}`,
      responseType: `${responseType}`,
    });
  }
}
