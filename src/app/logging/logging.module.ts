import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogTableComponent } from './log-table/log-table.component';
import { LoggingRoutes } from './logging.routes';
import { MaterialModule } from '../material.module';
import { LogTypeLabelPipe } from '../utils/log-type-label.pipe';
import { ServiceNamePipe } from '../utils/service-name.pipe';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    LogTableComponent,
  ],
  imports: [
    CommonModule,
    LoggingRoutes,
    MaterialModule,
    UtilsModule
  ]
})
export class LoggingModule { }
