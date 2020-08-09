import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuObserverListComponent } from './cpu-observer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { EndpoitsService } from '../endpoits.service';

describe('CpuObserverListComponent', () => {
  let component: CpuObserverListComponent;
  let fixture: ComponentFixture<CpuObserverListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CpuObserverListComponent],
      imports: [HttpClientModule, MatDialogModule],
      providers: [EndpoitsService],
    }).compileComponents();
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
