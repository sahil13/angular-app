import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContractComponent } from './dynamic-contract.component';

describe('DynamicContractComponent', () => {
  let component: DynamicContractComponent;
  let fixture: ComponentFixture<DynamicContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
