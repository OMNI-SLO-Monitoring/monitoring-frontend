import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditSelectionComponent } from '../edit-selection/edit-selection.component';

@Component({
  'selector': 'app-selection-list',
  'templateUrl': './selection-list.component.html',
  'styleUrls': ['./selection-list.component.scss']
})
export class SelectionListComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  add() {
    this.matDialog.open(EditSelectionComponent);
  }
}
