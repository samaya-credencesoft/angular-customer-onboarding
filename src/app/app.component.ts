import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm, } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  hide = true;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();


  customers = [
    {value: 'individual-0', viewValue: 'Individual'},
    {value: 'public ltd-1', viewValue: 'Public Ltd'},
    {value: 'private ltd-2', viewValue: 'Private Ltd'},
    {value: 'llp-3', viewValue: 'LLP'},
    {value: 'partnership-4', viewValue: 'Partnership'},
    {value: 'proprietorship-5', viewValue: 'Proprietorship'},
    {value: 'society-6', viewValue: 'Society'},
    {value: 'trust-7', viewValue: 'Trust'},
    {value: 'school-8', viewValue: 'School'}
  ];

  employees = [
    {value: 'salaried-0', viewValue: 'Salaried'},
    {value: 'self employed-1', viewValue: 'Self employed'},
    {value: 'business-2', viewValue: 'Business'}
  ];


  ltypes = [
    {value: 'student loan-0', viewValue: 'Student loan'},
    {value: 'personal loan-1', viewValue: 'Personal loan'},
    {value: 'home loan-2', viewValue: 'Home loan'},
    {value: 'business loan-3', viewValue: 'Business loan'},
    {value: 'loan against property-4', viewValue: 'Loan against property'},
    {value: 'loan for educational institutes-5', viewValue: 'Loan for educational institutes'},
    {value: 'new car loan-6', viewValue: 'New car loan'},
    {value: 'used car loan-7', viewValue: 'Used car loan'},
    {value: 'two wheeler loan-8', viewValue: 'Two wheeler loan'}
  ];

  tenures = [
    {value: '1 year-0', viewValue: '1 Year'},
    {value: '2-4 year-1', viewValue: '2-4 Year'},
    {value: '5-8 year-1', viewValue: '5-8 Year'}
  ];

  titles = [
    {value: 'mr-0', viewValue: 'Mr'},
    {value: 'mrs-1', viewValue: 'Mrs'}
  ];


  genders = [
    {value: 'male-0', viewValue: 'Male'},
    {value: 'female-1', viewValue: 'Female'}
  ];
  
  myDate = new Date();
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}