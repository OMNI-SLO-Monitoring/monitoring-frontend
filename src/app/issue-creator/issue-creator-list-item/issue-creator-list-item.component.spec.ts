import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCreatorListItemComponent } from './issue-creator-list-item.component';

describe('IssueCreatorListItemComponent', () => {
  let component: IssueCreatorListItemComponent;
  let fixture: ComponentFixture<IssueCreatorListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueCreatorListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCreatorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
