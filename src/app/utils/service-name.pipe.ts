import { Pipe, PipeTransform } from '@angular/core';
import { MonitoringSelectionService } from '../monitoring-selection/monitoring-selection.service';

@Pipe({
  name: 'serviceName'
})
export class ServiceNamePipe implements PipeTransform {

  constructor(private serviceRegistration: MonitoringSelectionService) {}

  /**
   * Retrieves the name of a registered service by its url
   * 
   * @param url of a service
   * @returns name of service with the given url
   */
  transform(url: string, ...args: unknown[]): unknown {
    const service = this.serviceRegistration.getServiceByUrl(url);
    return service ? service.name : url;
  }

}
