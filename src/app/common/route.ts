import { Router, Routes } from '@angular/router';
import { CreateEventComponent } from '../event/create-event.component';
import { EventDetailComponent } from '../event/event-detail.component';
import { EventComponent } from '../event/event.component';
import { EventDetailsActivator } from './event-details-activator';

export const route: Routes = [
  { path: '', component: EventComponent },
  {
    path: 'event-detail/:eventId',
    component: EventDetailComponent,
    canActivate: [EventDetailsActivator],
  },
  { path: 'create', component: CreateEventComponent },
];
