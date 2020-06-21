import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObservationEndpointComponent } from './edit-observation-endpoint.component';

describe('EditObservationEndpointComponent', () => {
  let component: EditObservationEndpointComponent;
  let fixture: ComponentFixture<EditObservationEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditObservationEndpointComponent ]
    })
    .compileComponents();
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
