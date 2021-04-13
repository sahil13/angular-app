import { Component, OnInit } from '@angular/core';
import { ContractService } from '../common/contract.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
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

  flg = false;
  contractsData;
  constructor(private contractService: ContractService) {}

  ngOnInit(): void {
    this.contractsData = this.contractService.getContracts();
  }

  toggle(flg) {
    this.flg = flg;
  }
}
