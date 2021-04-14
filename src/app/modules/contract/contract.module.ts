import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsComponent } from './components/contracts/contracts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from 'src/app/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContractsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
