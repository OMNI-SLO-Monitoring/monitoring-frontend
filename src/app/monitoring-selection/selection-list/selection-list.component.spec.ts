import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionListComponent } from './selection-list.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SelectionItemComponent } from '../selection-item/selection-item.component';
import { EditSelectionComponent } from '../edit-selection/edit-selection.component';
import { MaterialModule } from 'src/app/material.module';

describe('SelectionListComponent', () => {
  let component: SelectionListComponent;
  let fixture: ComponentFixture<SelectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionListComponent, SelectionItemComponent, EditSelectionComponent],
      imports: [MaterialModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
