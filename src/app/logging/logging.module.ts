import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogTableComponent } from './log-table/log-table.component';
import { LoggingRoutes } from './logging.routes';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [LogTableComponent],
  imports: [
    CommonModule,
    LoggingRoutes,
    MaterialModule
  ]
})
export class LoggingModule { }
