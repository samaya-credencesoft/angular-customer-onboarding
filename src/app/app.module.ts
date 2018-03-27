import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import {LoanApplicationService} from './shared/loanApplication/loanApplication.service';
import {HttpClientModule} from "@angular/common/http";
import {AddLoanApplicationComponent} from './loanApplication/new-loanApplication.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLoanApplicationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoanApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
