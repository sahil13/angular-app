import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    DropdownModule,
  ],
  exports: [
    TableModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    DropdownModule,
  ]
})
export class SharedModule { }
