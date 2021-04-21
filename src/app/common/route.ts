import { Router, Routes } from '@angular/router';
import { ContractsComponent } from '../modules/contract/components/contracts/contracts.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { CreateEventComponent } from '../event/create-event.component';
import { EventDetailComponent } from '../event/event-detail.component';
import { EventComponent } from '../event/event.component';
import { OverviewComponent } from '../overview/overview.component';
import { PostComponent } from '../post/post.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { SpecsComponent } from '../specs/specs.component';
import { EventDetailsActivator } from './event-details-activator';

export const route: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'event', component: EventComponent },
  { path: 'post', component: PostComponent },
  { path: 'post-list', component: ProductListComponent },
  {
    path: 'post-list',
    component: ProductListComponent,
    children: [
      { path: 'overview', outlet: 'overview', component: OverviewComponent },
      { path: 'specs', outlet: 'specs', component: SpecsComponent }
    ]
  },
  { path: 'dynamic', component: DynamicComponent },
  { path: 'post/:id', component: PostComponent },
  {
    path: 'event/event-detail/:eventId',
    component: EventDetailComponent,
    canActivate: [EventDetailsActivator]
  },
  { path: 'create', component: CreateEventComponent },
  { path: 'contracts', component: ContractsComponent }
];
