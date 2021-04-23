import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {
  contractForm = this.fb.group({
    contractName: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    craft: new FormControl('', []),
    shortdesc: new FormControl('', [Validators.required]),
    longdesc: new FormControl('', [Validators.required]),
    addParty: new FormGroup({
      role1: new FormControl('', []),
      name1: new FormControl('', []),
      alias1: new FormControl('', [])
    }),
    parties: new FormArray([]),
    documentname: new FormControl('', [Validators.required]),
    documentdesc: new FormControl('', [Validators.required]),
    addCityState: new FormGroup({
      city1: new FormControl(),
      state1: new FormControl()
    }),
    locations: new FormArray([])
  });

  index = 0;

  inpObj = {
    fields: [
      { inputType: 'text', labelName: 'Role', formControlName: 'role1' },
      { inputType: 'text', labelName: 'Name', formControlName: 'role1' },
      { inputType: 'text', labelName: 'Alias', formControlName: 'role1' }
    ],
    formGroupName1: this.contractForm.get('addParty'),
    mainForm: this.contractForm
  };

  openNext(i) {
    this.index = i;
  }

  getCityState(city1, state1) {
    return this.fb.group({
      city: new FormControl(city1, [Validators.required]),
      state: new FormControl(state1, [Validators.required])
    });
  }

  addStateCity() {
    const addCityState = this.contractForm.get('addCityState') as FormGroup;
    const city1 = addCityState.get('city1').value;
    const state1 = addCityState.get('state1').value;
    return (this.contractForm.get('locations') as FormArray).push(
      this.getCityState(city1, state1)
    );
  }

  getparties(role1, name1, alias1) {
    return this.fb.group({
      role: new FormControl(role1, [Validators.required]),
      name: new FormControl(name1, []),
      alias: new FormControl(alias1, [])
    });
  }

  get parties() {
    return this.contractForm.get('parties') as FormArray;
  }
  addParties() {
    const addParty = this.contractForm.get('addParty') as FormGroup;
    const role1 = addParty.get('role1').value;
    const name1 = addParty.get('name1').value;
    const alias1 = addParty.get('alias1').value;
    addParty.reset();
    this.addpartyBtn();
    return this.parties.push(this.getparties(role1, name1, alias1));
  }
  removeParty(i) {
    (this.contractForm.get('parties') as FormArray).removeAt(i);
  }

  removeCityState(i){
    (this.contractForm.get('locations') as FormArray).removeAt(i);
  }

  addpartyBtn() {
    const addParty = this.contractForm.get('addParty') as FormGroup;
    const role1 = addParty.get('role1').value;
    const name1 = addParty.get('name1').value;
    const alias1 = addParty.get('alias1').value;
    if (!(role1 && name1 && alias1)) {
      return true;
    }
  }

  addCityStateBtn() {
    const addCityState = this.contractForm.get('addCityState') as FormGroup;
    const city1 = addCityState.get('city1').value;
    const state1 = addCityState.get('state1').value;
    if (!(city1 && state1)) {
      return true;
    }
  }

  myUploader(event) {
    console.log('red', event);
  }

  constructor(private fb: FormBuilder) {
    // console.log(' ===', this.contractForm.get('addParty'));
  }

  ngOnInit(): void {}

  get formControl() {
    return this.contractForm.controls;
  }
}
