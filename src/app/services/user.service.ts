import { Injectable, Output, EventEmitter } from '@angular/core';

export interface IUser {
  taiKhoan: string,
  hoTen: string,
  email: string,
  soDT: string,
  maNhom: string,
  maLoaiNguoiDung: string,
  accessToken: string,
}

export interface IUserDetail extends IUser {
  matKhau: string,
  loaiNguoiDung: string,
  thongTinDatVe: any[],
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  credentials: any;
  @Output() credentialsEmitter = new EventEmitter;

  setCredentials(credentials): void {
    this.credentials = credentials;
    this.credentialsEmitter.emit(this.credentials);
  }

  constructor() { }
}
