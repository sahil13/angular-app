import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../common/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: '../event/event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  event;
  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit() {
    const eventId = +this.activatedRoute.snapshot.params['eventId'];
    this.event = this.eventService
      .getEvents()
      .find((event) => event.id === eventId );
  }
}
