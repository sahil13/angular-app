import { ViewContainerRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponent } from './dynamic.component';
import { DynamicDirective } from './dynamic.directive';
import { DynamicService } from './dynamic.service';

describe('DynamicComponent', () => {
  let component: DynamicComponent;
  let fixture: ComponentFixture<DynamicComponent>;
  const vcr = jasmine.createSpyObj(ViewContainerRef, ['createComponent']);
  const dynamicServiceSpy = jasmine.createSpyObj(DynamicService, [
    'loadComponent'
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicComponent, DynamicDirective],
      providers: [
        { provide: DynamicService, useValue: dynamicServiceSpy },
        { provide: ViewContainerRef, useValue: vcr }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fetchPost', () => {
    component.fetchPosts();
    expect(dynamicServiceSpy.loadComponent).toHaveBeenCalled();
  });
});
