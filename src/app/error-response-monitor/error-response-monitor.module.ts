import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorResponseMonitorComponent } from './error-response-monitor.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { ErrorResponseMonitorService } from './error-response-monitor.service';

@NgModule({
  declarations: [ErrorResponseMonitorComponent],
  providers: [ErrorResponseMonitorService],
  imports: [CommonModule, MaterialModule, FormsModule],
  bootstrap: [ErrorResponseMonitorComponent],
})
export class ErrorResponseMonitorModule {}
