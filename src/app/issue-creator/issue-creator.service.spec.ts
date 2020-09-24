import { TestBed } from '@angular/core/testing';

import { IssueCreatorService } from './issue-creator.service';

describe('IssueCreatorService', () => {
  let service: IssueCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
