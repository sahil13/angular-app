import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../common/event.service';

@Component({
  selector: 'app-event',
  templateUrl: '../event/create-event.component.html',
})
export class CreateEventComponent {
  constructor(private eventService: EventService, private route: Router) {}

  submitEvent(eventForm) {
    console.log(eventForm);
    this.eventService.save(eventForm);
    this.route.navigate(['']);
  }
}
