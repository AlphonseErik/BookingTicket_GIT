import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageModule } from './user-page/user-page.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, UserPageModule,
  ],
  exports: [
    UserPageModule
  ]
})
export class UserModule { }
