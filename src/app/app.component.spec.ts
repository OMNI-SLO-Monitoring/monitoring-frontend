import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ErrorResponseMonitorModule } from './error-response-monitor/error-response-monitor.module';
import { MonitoringSelectionModule } from './monitoring-selection/monitoring-selection.module';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ErrorResponseMonitorModule,
        MonitoringSelectionModule,
        FormsModule,
      ],
      providers: [
        // fix test sometimes failing in debug mode of jasmin
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
