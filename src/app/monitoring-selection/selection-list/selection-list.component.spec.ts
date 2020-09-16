import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionListComponent } from './selection-list.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SelectionItemComponent } from '../selection-item/selection-item.component';
import { EditSelectionComponent } from '../edit-selection/edit-selection.component';
import { MaterialModule } from 'src/app/material.module';

describe('SelectionListComponent', () => {
  let component: SelectionListComponent;
  let fixture: ComponentFixture<SelectionListComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionListComponent, SelectionItemComponent, EditSelectionComponent],
      imports: [
        MaterialModule,
        HttpClientTestingModule,
      ],
    }).compileComponents().then(() => {
      httpTestingController = TestBed.get(HttpTestingController);
      fixture = TestBed.createComponent(SelectionListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    httpTestingController.expectOne(
      'http://localhost:3500/service-registration/all'
    ).flush('[]');
  });
});
