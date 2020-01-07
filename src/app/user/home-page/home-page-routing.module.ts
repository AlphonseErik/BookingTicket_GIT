import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const HomeRouting: Routes = [
  {path: "", component: HomePageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HomePageRoutingModule { }
