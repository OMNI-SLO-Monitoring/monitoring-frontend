import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationEndpointItemComponent } from './observation-endpoint-item.component';

describe('ObservationEndpointItemComponent', () => {
  let component: ObservationEndpointItemComponent;
  let fixture: ComponentFixture<ObservationEndpointItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationEndpointItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationEndpointItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
