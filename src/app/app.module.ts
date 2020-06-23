import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule } from 'ngx-socket-io';
import { config } from 'process';
import { ErrorResponseMonitorComponent } from './error-response-monitor/error-response-monitor.component';
import { ErrorResponseMonitorModule } from './error-response-monitor/error-response-monitor.module';
import { FormsModule } from '@angular/forms';
import { ErrorResponseMonitorService } from './error-response-monitor/error-response-monitor.service';
import { LogGetterService } from './error-response-monitor/log-getter.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ErrorResponseMonitorModule,
    FormsModule,
  ],
  providers: [ErrorResponseMonitorService, LogGetterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
