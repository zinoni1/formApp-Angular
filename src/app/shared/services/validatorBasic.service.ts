import { Injectable } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

@Injectable({providedIn: 'root'})
export class ValidatorBasicService{
    static isValidStockMinAndStockMax(arg0: string, arg1: string): import("@angular/forms").ValidatorFn {
      throw new Error('Method not implemented.');
    }
      

    isValidStockMinAndStockMax(StockMax: string, StockMin: string){  
        return (form: FormGroup): ValidationErrors | null => {
        const stockMin = form.get(StockMin)?.value
        const stockMax = form.get(StockMax)?.value
        if(stockMin > stockMax || stockMin === stockMax){
            form.get(StockMin)?.setErrors({notValidStocks: true})
            return{
                notValidStocks: true,
            }
        }
        form.get(StockMin)?.setErrors(null)
        return null;
    }
    }

    public  isValidField( form: FormGroup, field:string){
        return form.controls[field].errors && form.controls[field].touched
    
      }
}
