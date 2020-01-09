import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingTicketPageComponent } from './booking-ticket-page/booking-ticket-page.component';
import { BookingTicketPageRoutingModule } from './booking-ticket-page-routing.module';
import { SeatListComponent } from './seat-list/seat-list.component';
import { SeatItemComponent } from './seat-item/seat-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BookingTicketPageComponent,
    SeatListComponent,
    SeatItemComponent
  ],
  imports: [
    CommonModule,
    BookingTicketPageRoutingModule,
    RouterModule
  ],
  exports: [
    BookingTicketPageComponent
  ]
})
export class BookingTicketPageModule { }
