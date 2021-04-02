import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let fixture: ComponentFixture<AddComponent>;
  let component: AddComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
  }));

  it('check component', () => {
    expect(component).toBeTruthy();
  });
  it('check sum function', () => {
    const c = component.sum(2, 2);
    expect(c).toBe(4);
  });
});
