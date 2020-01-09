import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SigninRoutingModule } from './signin-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule
  ],
  exports: [
    SigninComponent
  ]
})
export class SigninModule { }
