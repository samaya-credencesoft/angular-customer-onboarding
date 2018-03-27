import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddLoanApplicationComponent } from './loanApplication/new-loanApplication.component';


const routes: Routes = [
  { path: 'newLoanApplication', component: AddLoanApplicationComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
