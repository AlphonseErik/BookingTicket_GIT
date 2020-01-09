import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTicketPageComponent } from './booking-ticket-page.component';

describe('BookingTicketPageComponent', () => {
  let component: BookingTicketPageComponent;
  let fixture: ComponentFixture<BookingTicketPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingTicketPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
