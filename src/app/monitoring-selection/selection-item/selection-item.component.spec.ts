import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionItemComponent } from './selection-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('SelectionItemComponent', () => {
  let component: SelectionItemComponent;
  let fixture: ComponentFixture<SelectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionItemComponent],
      imports: [MatDialogModule, HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
