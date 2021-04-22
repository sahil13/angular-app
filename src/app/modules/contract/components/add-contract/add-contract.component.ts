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
    parties: new FormArray([])
  });

  index = 0;

  openNext() {
    this.index = this.index === 2 ? 0 : this.index + 1;
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

  addpartyBtn() {
    const addParty = this.contractForm.get('addParty') as FormGroup;
    const role1 = addParty.get('role1').value;
    const name1 = addParty.get('name1').value;
    const alias1 = addParty.get('alias1').value;
    console.log(role1, 'name=' , name1, 'alias=', alias1);
    if (!(role1 && name1 && alias1)) {
      return true;
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get formControl() {
    return this.contractForm.controls;
  }
}
