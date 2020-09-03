import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorResponseMonitorComponent } from './error-response-monitor.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ErrorResponseMonitorService } from './error-response-monitor.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ErrorResponseMonitorComponent', () => {
  let component: ErrorResponseMonitorComponent;
  let fixture: ComponentFixture<ErrorResponseMonitorComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorResponseMonitorComponent],
      imports: [MatDialogModule, HttpClientTestingModule, FormsModule],
      providers: [ErrorResponseMonitorService],
    }).compileComponents().then(() => {
      httpTestingController = TestBed.get(HttpTestingController);
      fixture = TestBed.createComponent(ErrorResponseMonitorComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
