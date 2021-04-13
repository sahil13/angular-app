import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contracts = [
    {
      contractno: 'CSX100001',
      contractName: 'Main Contract',
      shortDesc: 'increasing the wages of employees',
      value: '27,000',
      primaryParty: 'CSX',
      documents: '40',
      submittedDate: '09-04-2021',
      submitter: 'sahil arora'
    },
    {
      contractno: 'CSX100001',
      contractName: 'Main Contract',
      shortDesc: 'increasing the wages of employees',
      value: '27,000',
      primaryParty: 'CSX',
      documents: '40',
      submittedDate: '09-04-2021',
      submitter: 'sahil arora'
    },
    {
      contractno: 'CSX100001',
      contractName: 'Main Contract',
      shortDesc: 'increasing the wages of employees',
      value: '27,000',
      primaryParty: 'CSX',
      documents: '40',
      submittedDate: '09-04-2021',
      submitter: 'sahil arora'
    },
    {
      contractno: 'CSX100001',
      contractName: 'Main Contract',
      shortDesc: 'increasing the wages of employees',
      value: '27,000',
      primaryParty: 'CSX',
      documents: '40',
      submittedDate: '09-04-2021',
      submitter: 'sahil arora'
    },
    {
      contractno: 'CSX100001',
      contractName: 'Main Contract',
      shortDesc: 'increasing the wages of employees',
      value: '27,000',
      primaryParty: 'CSX',
      documents: '40',
      submittedDate: '09-04-2021',
      submitter: 'sahil arora'
    },
    {
      contractno: 'CSX100001',
      contractName: 'Main Contract',
      shortDesc: 'increasing the wages of employees',
      value: '27,000',
      primaryParty: 'CSX',
      documents: '40',
      submittedDate: '09-04-2021',
      submitter: 'sahil arora'
    },
    {
      contractno: 'CSX100001',
      contractName: 'Main Contract',
      shortDesc: 'increasing the wages of employees',
      value: '27,000',
      primaryParty: 'CSX',
      documents: '40',
      submittedDate: '09-04-2021',
      submitter: 'sahil arora'
    },
    {
      contractno: 'CSX100001',
      contractName: 'Main Contract',
      shortDesc: 'increasing the wages of employees',
      value: '28,000',
      primaryParty: 'CSX',
      documents: '40',
      submittedDate: '09-04-2021',
      submitter: 'sahil arora'
    },
    {
      contractno: 'CSX100001',
      contractName: 'Main Contract',
      shortDesc: 'increasing the wages of employees',
      value: '27,000',
      primaryParty: 'CSX',
      documents: '40',
      submittedDate: '09-04-2021',
      submitter: 'sahil arora'
    }
  ];

  getContracts() {
    return this.contracts;
  }
}
