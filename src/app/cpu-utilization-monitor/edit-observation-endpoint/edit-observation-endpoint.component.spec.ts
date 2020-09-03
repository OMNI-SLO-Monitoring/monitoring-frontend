import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObservationEndpointComponent } from './edit-observation-endpoint.component';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { CpuObservationEndpoint } from 'cpu-monitoring-models';

describe('EditObservationEndpointComponent', () => {
  let component: EditObservationEndpointComponent;
  let fixture: ComponentFixture<EditObservationEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditObservationEndpointComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        FormBuilder,
        { provide: CpuObservationEndpoint, useValue: {} },
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(EditObservationEndpointComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
