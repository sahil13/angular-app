import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AddContract } from '../../model/addContract';
import { Party } from '../../model/Party';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {
  addContract: AddContract;
  selectedValue;

  contractForm = this.fb.group({
    contractName: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    craft: new FormControl('', []),
    shortdesc: new FormControl('', [Validators.required]),
    longdesc: new FormControl('', [Validators.required]),
    addParty: new FormGroup({
      role1: new FormControl('Contractor', []),
      name1: new FormControl('', []),
      alias1: new FormControl('', [])
    }),
    parties: new FormArray([])
  });

  uploadForm = this.fb.group({
    documentname: new FormControl('', [Validators.required]),
    documentdesc: new FormControl('', [Validators.required]),
    addCityState: new FormGroup({
      city1: new FormControl(),
      state1: new FormControl()
    }),
    locations: new FormArray([])
  });

  roles = [
    { name: 'Contractor', code: 'contractor' },
    { name: 'Union', code: 'union' },
    { name: 'A', code: 'a' },
    { name: 'B', code: 'b' }
  ];

  editable: string;

  names: string[] = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
  ];

  output: string[];

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

  search(event) {
    console.log('event', event);
    this.output = this.names.filter(c => c.startsWith(event.query));
  }

  makeFieldsEditable(i) {
    this.editable = i;
  }

  openNext(i) {
    this.index = i;
    if (i === 2) {
      this.setDatatoModel();
    }
  }

  /* both form transformation */
  setDatatoModel() {
    /*   const contractName = this.contractForm.get('contractName').value;
    const value = this.contractForm.get('value').value;
    const craft = this.contractForm.get('craft').value;
    const shortdesc = this.contractForm.get('shortdesc').value;
    const longdesc = this.contractForm.get('longdesc').value; */
    // const parties = this.contractForm.get('parties')
    const formValues = JSON.parse(JSON.stringify(this.contractForm.value));
    console.log('formValues===', formValues);
    delete formValues.addParty;
    const finalFormValues = {
      ...formValues,
      ...JSON.parse(JSON.stringify(this.uploadForm.value))
    };
    // this.contractService.saveContract(finalFormValues);
    console.log(finalFormValues);
    /* this.service.save(finalFormValues).subscribe(data=>{
      console.log(data);
    });
    save(data:AddContract){
     return this.http.post(api_url,data); //id -200
    } */

    // let parties: Party[] = [];

    // for(int i =0;  )

    /*  Party p1 = new Party();

    p1.role = 'xyz';
    p1.alias = sss; */

    /* parties.push(p1);
      this.addContract = {
      contractName: this.contractForm.get('contractName').value,
      parties: parties
    };  */
  }

  getCityState(city1, state1) {
    return this.fb.group({
      city: new FormControl(city1, [Validators.required]),
      state: new FormControl(state1, [Validators.required])
    });
  }

  addStateCity() {
    const addCityState = this.uploadForm.get('addCityState') as FormGroup;
    const city1 = addCityState.get('city1').value;
    const state1 = addCityState.get('state1').value;
    return (this.uploadForm.get('locations') as FormArray).push(
      this.getCityState(city1, state1)
    );
  }

  setMainValue(i) {
    console.log(this.contractForm.get('parties'));
    // return false;
    // const len = (this.contractForm.get('parties') as FormArray).length;
    const parties = this.contractForm.get('parties') as FormArray;
    let j;
    for (j = 0; j < parties.length; j++) {
      if (j === i) {
        parties.controls[j].get('main').setValue(1);
      } else {
        parties.controls[j].get('main').setValue(0);
      }
    }
  }

  getparties(role1, name1, alias1) {
    return this.fb.group({
      main: new FormControl('', []),
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
    const parties = this.contractForm.get('parties') as FormArray;

    const role1 = addParty.get('role1').value;
    const name1 = addParty.get('name1').value;
    const alias1 = addParty.get('alias1').value;

    console.log('role1', role1);

    addParty.reset();
    this.addpartyBtn();
    this.parties.push(this.getparties(role1, name1, alias1));
    console.log(this.parties);
    if (this.parties && this.parties.length === 1) {
      parties.controls[0].get('main').setValue(1);
    }
  }
  removeParty(i) {
    (this.contractForm.get('parties') as FormArray).removeAt(i);
  }

  removeCityState(i) {
    (this.uploadForm.get('locations') as FormArray).removeAt(i);
  }

  addpartyBtn() {
    const addParty = this.contractForm.get('addParty') as FormGroup;
    const role1 = addParty.get('role1').value;
    const name1 = addParty.get('name1').value;
    const alias1 = addParty.get('alias1').value;
    const flg = this.names.includes(name1);
    if (!(role1 && name1 && alias1 && flg)) {
      return true;
    }
  }

  /* isValueExist() {
    return true;
    const addParty = this.contractForm.get('addParty') as FormGroup;
    const name1 = addParty.get('name1').value;
    console.log('names1==', name1);
    const flg = this.names.includes(name1);
    if (flg) {
      return false;
    } else {
      return true;
    }
  } */

  addCityStateBtn() {
    const addCityState = this.uploadForm.get('addCityState') as FormGroup;
    const city1 = addCityState.get('city1').value;
    const state1 = addCityState.get('state1').value;
    if (!(city1 && state1)) {
      return true;
    }
  }

  myUploader(event) {
    console.log('red', event);
  }

  constructor(
    private fb: FormBuilder,
    private contractService: ContractService
  ) {
    console.log('inside add contract');
    // console.log(' ===', this.contractForm.get('addParty'));
  }

  ngOnInit(): void {}

  get formControl() {
    return this.contractForm.controls;
  }
  get uploadFormControl() {
    return this.uploadForm.controls;
  }
}
