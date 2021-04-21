import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Constants } from 'src/app/common/constant';
import { ContractService } from '../../../../common/contract.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  Constants = Constants;

  searchForm = this.fb.group({
    contractName: new FormControl('', [Validators.required])
  });

  flg = false;
  display = false;
  contractsData;
  constructor(
    private contractService: ContractService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contractsData = this.contractService.getContracts();
  }

  toggle(flg) {
    this.flg = flg;
  }
  resetForm() {
    this.searchForm.reset();
  }
  showDialog() {
    this.display = true;
  }
}
