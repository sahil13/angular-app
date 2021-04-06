import { Router, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { CreateEventComponent } from '../event/create-event.component';
import { EventDetailComponent } from '../event/event-detail.component';
import { EventComponent } from '../event/event.component';
import { PostComponent } from '../post/post.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { EventDetailsActivator } from './event-details-activator';

export const route: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'event', component: EventComponent },
  { path: 'post', component: PostComponent },
  { path: 'post-list', component: ProductListComponent },
  { path: 'dynamic', component: DynamicComponent },
  { path: 'post/:id', component: PostComponent },
  {
    path: 'event/event-detail/:eventId',
    component: EventDetailComponent,
    canActivate: [EventDetailsActivator],
  },
  { path: 'create', component: CreateEventComponent },
];
