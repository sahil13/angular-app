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
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostDirective } from './common/post.directive';
import { AddComponent } from './add/add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicDirective } from './dynamic/dynamic.directive';

import { LikeComponent } from './post/like.component';
import { LikeDirective } from './post/like.directive';
import { OverviewComponent } from './overview/overview.component';
import { SpecsComponent } from './specs/specs.component';

import { ContractModule } from './modules/contract/contract.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventDetailComponent,
    CreateEventComponent,
    CustomPipe,
    HideDirective,
    RemoveHyphenDirective,
    DashboardComponent,

    AddComponent,
    ProductListComponent,
    DynamicComponent,
    DynamicDirective,
    LikeComponent,
    LikeDirective,
    OverviewComponent,
    SpecsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ContractModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [EventDetailsActivator],
  bootstrap: [AppComponent]
})
export class AppModule {}
