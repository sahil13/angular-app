import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EventService } from '../common/event.service';
import { EventComponent } from './event.component';

describe('EventCompoent', () => {
  let component: any;
  let fixture: ComponentFixture<EventComponent>;
  let eventServiceSpy = jasmine.createSpyObj('EventService', ['getEvents']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventComponent],
      providers: [{ provide: EventService, useValue: eventServiceSpy }],
    });
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    eventServiceSpy = TestBed.get(EventService);
  });

  it('should check component', () => {
    expect(component).toBeTruthy();
  });

  it('get Events', () => {
    const event = [{ id: 4, name: 'abc', location: 'xyz' }];
    eventServiceSpy.getEvents.and.returnValue(of({ event }));
    fixture.detectChanges();
    expect(eventServiceSpy.getEvents).toHaveBeenCalled();
  });
});
