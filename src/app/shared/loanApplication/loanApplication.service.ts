import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoanApplication } from '../model/loanApplication.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class LoanApplicationService {
  public API = 'http://localhost:8080';
  public LOAN_APPLICATION_API = this.API + '/';
  constructor(private http: HttpClient){};
  public createLoanApplication(LoanApplication) {
      console.log(LoanApplication);
        return this.http.post(this.LOAN_APPLICATION_API, LoanApplication);
    }


}
