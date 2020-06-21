import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CpuObservationEndpoint } from 'cpu-monitoring-models';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-observation-endpoint',
  templateUrl: './edit-observation-endpoint.component.html',
  styleUrls: ['./edit-observation-endpoint.component.scss']
})
export class EditObservationEndpointComponent implements OnInit {

  newEndpointForm;
  submit: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private endpoint: CpuObservationEndpoint,
    private dialog: MatDialogRef<EditObservationEndpointComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    if (!this.endpoint) {
      this.newEndpointForm = this.formBuilder.group({
        name: '',
        endpoint: '',
        threshold: '',
        frequency: '',
      })
    } else {
      this.newEndpointForm = this.formBuilder.group({
        name: this.endpoint.name,
        endpoint: this.endpoint.cpuUtilQueryEndpoint,
        threshold: this.endpoint.criticalCpuUtilThreshold,
        frequency: this.endpoint.cpuObservationFrequencyMilis,
      })
    }
  }

  onSubmit(endpointData) {
    this.newEndpointForm.reset();
    this.dialog.close(endpointData);
  }

}
