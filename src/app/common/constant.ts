import { Contract } from './contract';

export class Constants {
  public static readonly contractCols: Contract[] = [
    { field: 'contractno', header: 'Contract No.', width: '120' },
    { field: 'contractName', header: 'Contract Name', width: '140' },
    { field: 'shortDesc', header: 'Short Description', width: '130' },
    { field: 'value', header: 'Value', width: '80' },
    { field: 'primaryParty', header: 'Primary Party', width: '120' },
    { field: 'documents', header: 'Documents', width: '110' },
    { field: 'submittedDate', header: 'Submitted Date', width: '130' },
    { field: 'submitter', header: 'Submitter', width: '100' }
  ];
}
