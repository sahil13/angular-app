import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  EVENTS = [
    { id: 1, name: 'share market', location: {street: 'Karnal', houseNo: 'g-29'} },
    { id: 2, name: 'LIC dd', location: {street: 'Karnal', houseNo: 'g-29'} },
    { id: 3, name: 'Honda Service', location: {street: 'Karnal', houseNo: 'g-29'} },
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
