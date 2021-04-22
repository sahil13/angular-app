import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export interface Contract {
  form: FormBuilder;
  addParty: FormGroup; // formgroup
  fields: object;
  parties: FormArray;
  containerField: object;
}
