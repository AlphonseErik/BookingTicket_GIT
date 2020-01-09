import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})

export class UserGateway {
    userSignin(user: IUser): Observable<any> {
        return this._http.post("http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap", user)
    }


    constructor(private _http: HttpClient) { }
}