import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../common/event.service';

@Component({
  selector: 'app-event',
  templateUrl: '../event/create-event.component.html',
})
export class CreateEventComponent {
  constructor(
    private eventService: EventService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  userform = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(3)]],
    code: ['', Validators.required],
    location: this.fb.array([this.createLocation()]),
  });

  errorKeys = {
    name: '',
    code: '',
    street: '',
    houseNo: '',
  };

  get myFormControl() {
    return this.userform.controls;
  }

  errorMsg = {
    name: {
      required: 'name is required',
      maxLength: 'Max length should be 3',
    },
    code: {
      required: 'code is required',
    },
    street: {
      required: 'street is required',
    },
    houseNo: {
      required: 'houseNo is required',
    },
  };

  createLocation() {
    return this.fb.group({
      street: ['', Validators.required],
      houseNo: ['', Validators.required],
    });
  }

  submitEvent(userForm) {
    /*  this.userform.patchValue({
      name: 'dude' + this.userform.get('name').value,
    }); */

    console.log(this.userform.value);

    const a = userForm.value;
    a.name = 'dude' + a.name;
    console.log(a);
    // this.http.post(ur,)
    // this.logValidateErrors(userForm);
    // this.eventService.save(eventForm);
    // this.route.navigate(['']);
  }

  logValidateErrors(group) {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormArray) {
        abstractControl.controls.forEach((innerGroup) => {
          this.logValidateErrors(innerGroup);
        });
      }

      for (const error in abstractControl.errors) {
        if (error) {
          // this.errorKeys[key] += this.errorMsg[key][error];
        }
      }
    });
  }

  pushLocation() {
    (this.userform.get('location') as FormArray).push(this.createLocation());
  }
}
