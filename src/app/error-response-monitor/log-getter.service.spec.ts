import { TestBed } from '@angular/core/testing';

import { LogGetterService } from './log-getter.service';

describe('LogGetterService', () => {
  let service: LogGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
