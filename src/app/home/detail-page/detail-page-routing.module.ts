import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { BookingTicketPageModule } from 'src/app/booking-ticket/booking-ticket-page.module';

const DetailPageRouting: Routes = [
  {
    path: "", 
    component: DetailPageComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(DetailPageRouting)
  ]
})
export class DetailPageRoutingModule { }
