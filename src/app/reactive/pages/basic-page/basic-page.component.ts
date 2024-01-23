import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ValidatorBasicService } from 'src/app/shared/services/validatorBasic.service';
import { ValidatorFn } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  
})
export class BasicPageComponent implements OnInit{

  public myForm: FormGroup = new FormGroup({
    name: new FormControl('',[ Validators.required, Validators.minLength(3) ]),
    price: new FormControl(0,[ Validators.required, Validators.min(0) ]),
    inStorage: new FormControl(0,[ Validators.required, Validators.min(0) ]),
    StockMin: new FormControl(0,[ Validators.required, Validators.min(0)]),
    StockMax: new FormControl(0,[ Validators.required, Validators.min(0) ])
  },{
    validators: this.ValidatorBasicService.isValidStockMinAndStockMax('StockMax','StockMin') as ValidatorFn
  });
  constructor(private ValidatorBasicService: ValidatorBasicService) { }

  ngOnInit(): void{
  }

  isValidField( field: string){
    return this.ValidatorBasicService.isValidField(this.myForm, field)
  }

  getFieldError(field: string): string | null{
    if(!this.myForm.controls[field]) return null

    const errors = this.myForm.controls[field].errors ||{}

    for (const key of Object.keys(errors)){
      switch(key){
        case 'required':
          return 'Este campo es requerido'
        
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`

      }
    }

    return null
  }

  onSave(): void{
    if(this.myForm.invalid) {this.myForm.markAllAsTouched();return};
    console.log(this.myForm.value)

    this.myForm.reset({price: 0, inStorage: 0})
  }
}
