import { Component, OnInit } from '@angular/core';

import { ErrorResponseMonitorService } from './error-response-monitor.service';

/**
 * This component is responsible for registering the user request properties
 * in the UI and passing the input values down to the request info sender service
 */
@Component({
  selector: 'app-error-response-monitor',
  templateUrl: './error-response-monitor.component.html',
  styleUrls: ['./error-response-monitor.component.scss'],
})
export class ErrorResponseMonitorComponent implements OnInit {
  //url endpoint, adjustable by user
  urlEndpoint: string;
  //http method, get or post
  httpMethod;
  //datatype of user adjusted response type for get/post request
  responseType;
  //body of the post request if it was selected
  postBody: string;
  //received response of the request
  receivedResponse;
  //log messages to be displayed in UI
  logs: Object[] = [];

  constructor(private requestInfoSender: ErrorResponseMonitorService) {
    /*
    setInterval(() => {
      this.getLogMessages();
    }, 1000);*/
  }

  ngOnInit(): void {}

  /**
   * Passes the request info down to the request info sender service and receives
   * the response in form of response message and log if there was a failure
   *  in order to render it in the UI
   */
  requestInfo() {
    this.requestInfoSender
      .sendRequestInfoToBackend(
        this.urlEndpoint,
        this.httpMethod,
        this.responseType,
        this.postBody
      )
      .subscribe(
        (res) => {
          this.receivedResponse = res.msg;
          if (res.log) {
            this.logs.push(res.log);
          }
        },
        (err) => (this.receivedResponse = err.message)
      );
  }
}
