import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCreatorListComponent } from './issue-creator-list.component';

describe('IssueCreatorListComponent', () => {
  let component: IssueCreatorListComponent;
  let fixture: ComponentFixture<IssueCreatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueCreatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCreatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
