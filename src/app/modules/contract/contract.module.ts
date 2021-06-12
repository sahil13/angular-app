import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsComponent } from './components/contracts/contracts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from 'src/app/header/header.component';
import { AddContractComponent } from './components/add-contract/add-contract.component';
import { DynamicContractComponent } from './components/dynamic-contract/dynamic-contract.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [ContractsComponent, HeaderComponent, AddContractComponent, DynamicContractComponent, EmployeeComponent, SkillsComponent],
  imports: [CommonModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContractModule {}
