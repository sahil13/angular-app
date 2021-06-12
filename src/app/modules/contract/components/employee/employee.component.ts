import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  employeeForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    employeeCode: new FormControl('', []),
    skills: new FormArray([])
  });

  constructor(
    private formBuilder: FormBuilder,
    private contractService: ContractService
  ) {}

  submitRecord() {
    // console.log(this.employeeForm.value);
    this.contractService.setEmployeeData(this.employeeForm.value);
    this.contractService.employeeAction$.subscribe(data => {
      console.log('subscribed Data', data);
    });
  }
}
