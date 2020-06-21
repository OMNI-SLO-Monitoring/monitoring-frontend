import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuObserverListComponent } from './cpu-observer-list.component';

describe('CpuObserverListComponent', () => {
  let component: CpuObserverListComponent;
  let fixture: ComponentFixture<CpuObserverListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuObserverListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuObserverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
