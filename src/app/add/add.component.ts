import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AddService } from '../modules/contract/components/add-contract/add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  c;
  constructor(private fb: FormBuilder, private addService: AddService) {
    this.getUsers();
  }

  empForm = this.fb.group({
    name: new FormControl('aaa', [Validators.required])
  });

  getForm() {
    return this.empForm.get('name').value;
  }

  sum(a, b) {
    return a + b;
  }

  getUsers() {
    this.addService.users$.subscribe(users => {
      return users[0].name;
    });
  }
}
