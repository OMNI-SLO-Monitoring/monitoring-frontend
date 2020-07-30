import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObservationEndpointComponent } from './edit-observation-endpoint.component';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

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
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditObservationEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
