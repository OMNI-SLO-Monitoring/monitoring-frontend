import { Component, OnInit } from '@angular/core';

import { ErrorResponseMonitorService } from './error-response-monitor.service';
import { LogGetterService } from './log-getter.service';

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
  //datatype of user adjusted response type
  responseType;
  //received response of the request
  receivedResponse;
  //log messages to be displayed in UI
  logs: [];

  constructor(
    private requestInfoSender: ErrorResponseMonitorService,
    private logGetter: LogGetterService
  ) {
    setInterval(() => {
      this.getLogMessages();
    }, 1000);
  }

  ngOnInit(): void {}

  /**
   * Passes the request info down to the request info sender service and receives
   * the response in order to render it in the UI
   */
  requestInfo() {
    this.requestInfoSender
      .sendRequestInfoToBackend(
        this.urlEndpoint,
        this.httpMethod,
        this.responseType
      )
      .subscribe(
        (res) => (this.receivedResponse = res),
        (err) => (this.receivedResponse = 'Incorrect Response Type')
      );
  }

  /**
   * Gets the log messages to render in the UI
   */
  getLogMessages() {
    this.logGetter.fetchLogs().subscribe(
      (res) => {
        this.logs = res;
        console.log(res);
      },
      (err) => new Error(err)
    );
  }
}
