import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { Routes, RouterModule } from '@angular/router';

const SigninRouting: Routes = [
  { path: "", component: SigninComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(SigninRouting)
  ]
})
export class SigninRoutingModule { }
