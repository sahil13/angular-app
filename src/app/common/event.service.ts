import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  EVENTS = [
    { id: 1, name: 'share market', location: 'Karnal' },
    { id: 2, name: 'LIC', location: 'Panipat' },
    { id: 3, name: 'Honda Service', location: 'NLK' },
  ];

  getEvents() {
    return this.EVENTS;
  }

  save(eventForm) {
    eventForm.id = 4;
    console.log(eventForm);
    this.EVENTS.push(eventForm);
  }
}
