import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCreatorEditComponent } from './issue-creator-edit.component';

describe('IssueCreatorEditComponent', () => {
  let component: IssueCreatorEditComponent;
  let fixture: ComponentFixture<IssueCreatorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueCreatorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCreatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
