import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditSelectionComponent } from '../edit-selection/edit-selection.component';
import { MonitoringSelectionService } from '../monitoring-selection.service';

@Component({
  selector: 'app-selection-item',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.scss']
})
export class SelectionItemComponent implements OnInit {

  @Input() monitorSelection: any;
  constructor(private matDialog: MatDialog,
              private monitoringSelectionService: MonitoringSelectionService) { }

  ngOnInit(): void {
  }

  updateSelection(selectionData) {

  }

  deleteSelection() {
    this.monitoringSelectionService.deleteSelection(this.monitorSelection._id);
  }

  edit() {
    this.matDialog.open(EditSelectionComponent, {}).afterClosed().subscribe(res => {
      this.updateSelection(res);
    });
  }

}
