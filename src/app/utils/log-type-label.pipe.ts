import { Pipe, PipeTransform } from '@angular/core';
import { LogType } from 'logging-format';

@Pipe({
  name: 'logTypeLabel'
})
export class LogTypeLabelPipe implements PipeTransform {

  /**
   * Assigns a Label that will be displayed in the log table for each LogType
   * 
   * @param logType that should be converted
   * @returns a Label for each LogType
   */
  transform(logType: LogType, ...args: unknown[]): unknown {
    switch (logType) {
      case LogType.CPU:
        return "CPU";
      case LogType.ERROR:
        return "Error";
      case LogType.CB_OPEN:
        return "Circuit Breaker Open";
      case LogType.TIMEOUT:
        return "Timeout Error";
      default:
        break;
    }
  }
}
