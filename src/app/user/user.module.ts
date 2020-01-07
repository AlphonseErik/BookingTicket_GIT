import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageModule } from './home-page/home-page.module';
import { UserPageModule } from './user-page/user-page.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, UserPageModule,
  ],
  exports: [HomePageModule,UserPageModule]
})
export class UserModule { }
