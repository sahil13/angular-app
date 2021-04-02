import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CustomPipe } from '../common/custom.pipe';
import { EventService } from '../common/event.service';
import { EventComponent } from './event.component';

describe('EventCompoent', () => {
  let component: any;
  let fixture: ComponentFixture<EventComponent>;
  let eventServiceSpy = jasmine.createSpyObj('EventService', ['getEvents']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventComponent, CustomPipe],
      imports: [RouterTestingModule],
      providers: [{ provide: EventService, useValue: eventServiceSpy }],
    });
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    eventServiceSpy = TestBed.get(EventService);
  }));

  it('should check component', () => {
    expect(component).toBeTruthy();
  });

  it('get Events', () => {
    const event = [
      {
        id: 1,
        name: 'share market',
        location: { street: 'Karnal', houseNo: 'g-29' },
      },
    ];
    eventServiceSpy.getEvents.and.returnValue(event);
    fixture.detectChanges();
    expect(eventServiceSpy.getEvents).toHaveBeenCalled();
  });
});
