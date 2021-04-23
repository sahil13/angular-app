import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contract } from '../../model/contract';

@Component({
  selector: 'app-dynamic-contract',
  templateUrl: './dynamic-contract.component.html',
  styleUrls: ['./dynamic-contract.component.scss']
})
export class DynamicContractComponent implements OnInit {
  @Input() inpObj1;
  // @Input() form1: FormBuilder;
  constructor() {}

  ngOnInit(): void {
    // console.log('===', this.inpObj1.formGroupName1);
  }
}
