import { HttpClient } from '@angular/common/http';


export class MovieGateway {
    fetchMovieList() {
        return this._http.get(
            "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=10"
        )
    }


    constructor(private _http: HttpClient) { }
}