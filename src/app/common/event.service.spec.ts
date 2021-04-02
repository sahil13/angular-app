import { TestBed } from '@angular/core/testing';
import { EventService } from './event.service';

describe('EventService', () => {
  let eventService: EventService;
  let EVENTS;
//   const eventServiceSpy = jasmine.createSpyObj('EventService', ['save']);
  beforeEach(() => {
    EVENTS = [
      {
        id: 1,
        name: 'share market',
        location: { street: 'Karnal', houseNo: 'g-29' },
      },
      {
        id: 2,
        name: 'LIC dd',
        location: { street: 'Karnal', houseNo: 'g-29' },
      },
    ];

    TestBed.configureTestingModule({
    //   providers: [{ provide: EventService, useValue: eventServiceSpy }],
    });

    eventService = TestBed.get(EventService);
    eventService.EVENTS = EVENTS;
  });

  it('should check service', () => {
    expect(eventService).toBeTruthy();
  });

  it('Save Event', () => {
    const a = { name: 'share market', location: {street: 'Karnal', houseNo: 'g-29'} };
    eventService.save(a);
    expect(eventService.save).toBeDefined();
    console.log(EVENTS[2].name);
    expect(EVENTS.length).toBe(3);
  });
  it('get Events', () => {
    expect(eventService.EVENTS.length).toBe(2);
  });
});
