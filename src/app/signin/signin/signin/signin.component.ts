import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, IUser } from 'src/app/services/user.service';
import { UserGateway } from 'src/app/gateways/user.geteway';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private _userGateway: UserGateway,
    private _userService: UserService,
    private _route: Router,
  ) { }

  ngOnInit() {
  }

  signinFormSubmit(formSignin: NgForm) {
    console.log(formSignin);
    const newUser = { ...formSignin.form.value };
    this._userGateway.userSignin(formSignin.form.value).subscribe(
      (res: IUser) => {
        console.log(res);
        localStorage.setItem('credentials', JSON.stringify(res));
        this._userService.setCredentials(res);
        this._route.navigate(["/"]);
      },
      err => {
        console.log(err);
      }
    )
  }

}
