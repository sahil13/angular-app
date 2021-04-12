import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DynamicDirective } from './dynamic.directive';

describe('DynamicDirective', () => {
  let dynamicDirective: DynamicDirective;
  const vcr = jasmine.createSpyObj(ViewContainerRef, ['createComponent']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ViewContainerRef, useValue: vcr}, DynamicDirective]
    });
    dynamicDirective = TestBed.get(DynamicDirective);
  });

  it('check Directive', () => {
      expect(dynamicDirective).toBeTruthy();
  });
});
