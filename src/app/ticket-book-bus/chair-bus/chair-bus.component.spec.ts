import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairBusComponent } from './chair-bus.component';

describe('ChairBusComponent', () => {
  let component: ChairBusComponent;
  let fixture: ComponentFixture<ChairBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChairBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
