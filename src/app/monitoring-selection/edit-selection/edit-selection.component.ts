import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
@Component({
  'selector': 'app-edit-selection',
  'templateUrl': './edit-selection.component.html',
  'styleUrls': ['./edit-selection.component.scss']
})
export class EditSelectionComponent implements OnInit {

  newSelectionForm;
  submit: any;

  constructor(private dialog: MatDialogRef<EditSelectionComponent>,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    if (true) {
      this.newSelectionForm = this.formBuilder.group({
        name: '',
        serviceUrl: '',
      });
    }
  }

  onSubmit(selectionData) {
    this.newSelectionForm.reset();
    this.dialog.close(selectionData);
  }

}
