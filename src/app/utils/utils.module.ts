import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceNamePipe } from './service-name.pipe';
import { LogTypeLabelPipe } from './log-type-label.pipe';



@NgModule({
  declarations: [
    ServiceNamePipe,
    LogTypeLabelPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ServiceNamePipe,
    LogTypeLabelPipe
  ],
})
export class UtilsModule { }
