import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const HomePageRouting: Routes = [
  {path: "", component: HomePageComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(HomePageRouting)
  ]
})
export class HomePageRoutingModule { }
