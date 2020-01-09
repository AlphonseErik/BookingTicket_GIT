import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingTicketPageComponent } from './booking-ticket-page/booking-ticket-page.component';

const BookingTicketPageRouting: Routes = [
  { path: "", component: BookingTicketPageComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(BookingTicketPageRouting)
  ]
})
export class BookingTicketPageRoutingModule { }
