import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import { PostComponent } from '../post/post.component';
import { PostDirective } from '../common/post.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';


@NgModule({
  declarations: [
    PostComponent,
    PostDirective,
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    DropdownModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextareaModule,
    FileUploadModule
  ],
  exports: [
    TableModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    DropdownModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextareaModule,
    FileUploadModule
  ]
})
export class SharedModule { }
