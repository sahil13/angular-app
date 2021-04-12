import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DynamicService } from './dynamic.service';

describe('DynamicService', () => {
  const componentSpy = jasmine.createSpyObj(ViewContainerRef, [
    'createComponent'
  ]);

  let dynamicService: DynamicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [{ provide: ViewContainerRef, useValue: componentSpy }]
    });

    dynamicService = TestBed.get(DynamicService);
  });

  it('check loadComponent', () => {
    dynamicService.loadComponent(componentSpy);
    expect(dynamicService).toBeTruthy();
  });
});
