import { TestBed } from '@angular/core/testing';

import { EmpsalaryService } from './empsalary.service';

describe('EmpsalaryService', () => {
  let service: EmpsalaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpsalaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
