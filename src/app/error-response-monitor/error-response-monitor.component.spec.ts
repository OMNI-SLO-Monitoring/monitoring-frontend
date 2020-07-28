import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorResponseMonitorComponent } from './error-response-monitor.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ErrorResponseMonitorComponent', () => {
  let component: ErrorResponseMonitorComponent;
  let fixture: ComponentFixture<ErrorResponseMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorResponseMonitorComponent ],
      imports: [MatDialogModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorResponseMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
