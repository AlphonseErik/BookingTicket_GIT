import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  credentials: any;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.credentials = this._userService.credentials;
    this._userService.credentialsEmitter.subscribe(
      newCredentials => {
        this.credentials = newCredentials;
      }
    )
  }

}
