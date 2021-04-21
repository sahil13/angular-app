import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsComponent } from './components/contracts/contracts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from 'src/app/header/header.component';
import { AddContractComponent } from './components/add-contract/add-contract.component';

@NgModule({
  declarations: [ContractsComponent, HeaderComponent, AddContractComponent],
  imports: [CommonModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContractModule {}
