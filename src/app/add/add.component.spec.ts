import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AddService } from '../modules/contract/components/add-contract/add.service';
import { AddComponent } from './add.component';

fdescribe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let addServiceMock = {
    users$: of({ users: [{ name: 'test' }] })
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [{ provide: AddService, useValue: addServiceMock }]
    });

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
  });

  it('add two Variables', () => {
    const c = component.sum(10, 20);
    expect(c).toBe(30);
  });

  it('get Form Name Value', () => {
    const name = component.getForm();
    expect(name).toEqual('aaa');
  });

  it('get first UserName', () => {
    component.getUsers();
    expect(addServiceMock.users$).toBeDefined();
  });
});
