import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoanApplication } from '../shared/model/loanApplication.model';
import { LoanApplicationService } from '../shared/loanApplication/loanApplication.service';

@Component({
  templateUrl: './new-loanApplication.component.html'
})
export class AddLoanApplicationComponent {

  loanApplication: LoanApplication = new LoanApplication();

  constructor(private router: Router, private loanApplicationService: LoanApplicationService) {

  }

  createLoanApplication(): void {
    this.loanApplicationService.createLoanApplication(this.loanApplication)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
