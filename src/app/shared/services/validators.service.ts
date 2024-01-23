import { Injectable } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

@Injectable({providedIn: 'root'})
export class ValidatorsService{
    public  firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    
    
  cantBeStrider = (control: FormControl): ValidationErrors | null => {
    
    const value: string = control.value.trim().toLowerCase();

    if(value==='strider'){
        return{
        noStrider: true,
        }
    }
    return null;   
}
isFieldOneEqualFieldTwo(field1: string, field2: string){

  return (FormGroup: FormGroup): ValidationErrors | null => {
    const fieldValue1 = FormGroup.get(field1)?.value
    const fieldValue2 = FormGroup.get(field2)?.value

    if(fieldValue1 !== fieldValue2){
      FormGroup.get(field2)?.setErrors({notEqual: true})
      return {notEqual: true}
    }
    FormGroup.get(field2)?.setErrors(null)
    return null;
  }
}

public  isValidField( form: FormGroup, field:string){
    return form.controls[field].errors && form.controls[field].touched

  }
}
