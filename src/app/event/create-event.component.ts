import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../common/event.service';

@Component({
  selector: 'app-event',
  templateUrl: '../event/create-event.component.html',
})
export class CreateEventComponent {

    userform = new FormGroup({
        name: new FormControl('', [Validators.required]),
        code: new FormControl('', [Validators.required]),
        location: new FormGroup({
            street: new FormControl('', [Validators.required]),
            houseNo: new FormControl('', [Validators.required])
        })
    });

  constructor(private eventService: EventService, private route: Router) {}

  submitEvent(eventForm){

    const a = Object.keys(this.userform.controls);
    console.log(a);
    // this.eventService.save(eventForm);
    // this.route.navigate(['']);
  }

}
