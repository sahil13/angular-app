import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './event.service';

@Injectable()
export class EventDetailsActivator implements CanActivate {
  constructor(private eventService: EventService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const eventId = +route.params['eventId'];
    const list = this.eventService
      .getEvents()
      .find((event) => event.id === eventId);
    return !!list;
    // if (list?.id) {
    //   return true;
    // }
    // return false;
  }
}
