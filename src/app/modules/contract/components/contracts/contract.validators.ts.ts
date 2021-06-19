import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ContractValidators {
  static matchEmails(control: AbstractControl): ValidationErrors | null {
    const email = control.value.email;
    const cfmEmail = control.value.cfmEmail;
    // console.log(email);
    if (email >= cfmEmail) {
      return { matchEmails: true };
    }
    return null;
  }
}
