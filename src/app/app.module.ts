import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { route } from './common/route';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event/event-detail.component';
import { EventDetailsActivator } from './common/event-details-activator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEventComponent } from './event/create-event.component';
import { CustomPipe } from './common/custom.pipe';
import { HideDirective } from './common/hide.directive';
import { RemoveHyphenDirective } from './common/remove-hyphen.directive';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventDetailComponent,
    CreateEventComponent,
    CustomPipe,
    HideDirective,
    RemoveHyphenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventDetailsActivator],
  bootstrap: [AppComponent],
})
export class AppModule {}
