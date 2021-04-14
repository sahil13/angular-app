import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ContractService } from '../../../../common/contract.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  /**move this to constant */
  cols = [
    { field: 'contractno', header: 'Contract No.', width: '120' },
    { field: 'contractName', header: 'Contract Name', width: '140' },
    { field: 'shortDesc', header: 'Short Description', width: '130' },
    { field: 'value', header: 'Value', width: '80' },
    { field: 'primaryParty', header: 'Primary Party', width: '120' },
    { field: 'documents', header: 'Documents', width: '110' },
    { field: 'submittedDate', header: 'Submitted Date', width: '130' },
    { field: 'submitter', header: 'Submitter', width: '100' }
  ];

  searchForm = this.fb.group({
    contractName: new FormControl('', [Validators.required])
  });

  flg = false;
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
}
