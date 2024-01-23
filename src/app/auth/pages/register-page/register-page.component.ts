import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required,Validators.pattern(this.ValidatorService.firstNameAndLastnamePattern)]],
    // email: ['',[Validators.required, Validators.pattern(this.ValidatorService.emailPattern)],[new EmailValidator()]], 
    email: ['',[Validators.required, Validators.pattern(this.ValidatorService.emailPattern)],[this.emailValidator]], 
    username: ['',[Validators.required, this.ValidatorService.cantBeStrider]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]]
  },{
    validators: [
      this.ValidatorService.isFieldOneEqualFieldTwo('password','password2')
    ]
  })

  constructor(private fb: FormBuilder, private ValidatorService: ValidatorsService, private emailValidator: EmailValidator) {}
 
  isValidField(field: string){
    return this.ValidatorService.isValidField(this.myForm, field)
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}

