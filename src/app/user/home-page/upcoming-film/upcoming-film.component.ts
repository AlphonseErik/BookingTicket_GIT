import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-film',
  templateUrl: './upcoming-film.component.html',
  styleUrls: ['./upcoming-film.component.scss']
})
export class UpcomingFilmComponent implements OnInit {
  MovieList = [
    { TenPhim: "Rambo: Hồi Kết Đẫm Máu", HinhAnh: '../../../assets/img/rambo-hoi-ket-dam-mau-rambo-last-blood-c18-15755193669811_215x318.jpg' },
    { TenPhim: "Hài Đỏ Và Bảy Chú Lùn", HinhAnh: '../../../assets/img/hai-do-va-bay-chu-lun-red-shoes-and-the-seven-dwarfs-15756176377840_215x318.jpg' },
    { TenPhim: "Chồng Cũ, Tình Mới", HinhAnh: '../../../assets/img/chong-cu-tinh-moi-love-again-15753475413923_215x318.jpg' },
    { TenPhim: "Cuộc Giải Cứu Hang Tham Laung - The Cave", HinhAnh: '../../../assets/img/cuoc-giai-cuu-hang-tham-laung-the-cave-15748412700513_215x318.jpg' },
    { TenPhim: "Điệp Viên Ẩn Danh", HinhAnh: '../../../assets/img/diep-vien-an-danh-spies-in-disguise-15747409440171_215x318.jpg' },
    { TenPhim: "Trò Chơi Kỹ Ảo - Jumanji", HinhAnh: '../../../assets/img/phim-sap-chieu.jpg' },
  ];

  constructor() { }

  ngOnInit() {

  }

}
