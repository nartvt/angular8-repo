import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBookBusComponent } from './ticket-book-bus.component';

describe('TicketBookBusComponent', () => {
  let component: TicketBookBusComponent;
  let fixture: ComponentFixture<TicketBookBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketBookBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketBookBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
