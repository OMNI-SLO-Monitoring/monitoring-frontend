import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MonitoringSelectionDTO } from '../dto/monitoring-selection.dto';
import { MonitoringSelectionService } from '../monitoring-selection.service';


/**
 * Handling of a single item shown in the list of monitored services
 */
@Component({
  selector: 'app-selection-item',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.scss']
})
export class SelectionItemComponent {

  @Input() monitorSelection: MonitoringSelectionDTO;
  constructor(private matDialog: MatDialog,
    private monitoringSelectionService: MonitoringSelectionService) { }

  /**
   * Deletes the current item
   */
  async deleteSelection() {
    await this.monitoringSelectionService.deleteSelection(this.monitorSelection._id);
    window.location.reload();
  }
}
