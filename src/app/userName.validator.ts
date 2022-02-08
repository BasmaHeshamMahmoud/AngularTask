import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
// export function ForbiddenNameValidator(control: AbstractControl) {
//   const forbidden = /admin/.test(control.value);
//   return forbidden ? { forbiddenName: { value: control.value } } : null;
// }

export function ForbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl) => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
