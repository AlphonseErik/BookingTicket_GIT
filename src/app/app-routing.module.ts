import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: "./home/home-page/home-page.module#HomePageModule"
  },
  {
    path: "detail/:id",
    loadChildren: "./home/detail-page/detail-page.module#DetailPageModule"
  },
  {
    path: "detail/:id/booking",
    loadChildren: "./booking-ticket/booking-ticket-page.module#BookingTicketPageModule"
  },
  {
    path: "signin",
    loadChildren: "./signin/signin/signin.module#SigninModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
