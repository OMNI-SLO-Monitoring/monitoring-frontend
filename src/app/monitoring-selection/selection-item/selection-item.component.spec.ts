import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionItemComponent } from './selection-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('SelectionItemComponent', () => {
  let component: SelectionItemComponent;
  let fixture: ComponentFixture<SelectionItemComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionItemComponent],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
      ],
    }).compileComponents().then(() => {
      httpTestingController = TestBed.get(HttpTestingController);
      fixture = TestBed.createComponent(SelectionItemComponent);
      component = fixture.componentInstance;
      component.monitorSelection = {
        name: 'Hello World',
        _id: 'something',
        serviceUrl: 'http://example.com',
      };
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    httpTestingController.expectOne(
      'http://localhost:3400/monitoring-selection'
    ).flush('[]');
  });

});
