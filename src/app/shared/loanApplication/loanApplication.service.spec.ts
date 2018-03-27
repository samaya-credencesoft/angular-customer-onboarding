import { TestBed, inject } from '@angular/core/testing';

import { LoanApplicationService } from './loanApplication.service';

describe('LoanApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanApplicationService]
    });
  });

  it('should be created', inject([LoanApplicationService], (service: LoanApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
