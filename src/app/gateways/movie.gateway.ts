import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MovieGateway {
    fetchMovieList(): Observable<any> {
        return this._http.get(
            "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        )
    }


    constructor(private _http: HttpClient) { }
}