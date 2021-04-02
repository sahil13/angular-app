import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../common/event.service';

@Component({
  selector: 'app-event',
  styleUrls: ['../event/event.component.scss'],
  templateUrl: '../event/event.component.html',
})
export class EventComponent implements OnInit {
  events;

  constructor(private eventService: EventService, private route: Router) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  createEvent() {
    // this.route.navigate(['create']);
  }
}
