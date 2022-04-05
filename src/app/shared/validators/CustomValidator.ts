import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidator {
  public static requiredLength(length: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value.length == length ? { lengthError: true } : null;
    }
  }
}