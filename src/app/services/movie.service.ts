import { Injectable, Output, EventEmitter } from '@angular/core';

export interface IMovie {
  maPhim: string,
  tenPhim: string,
  biDanh: string,
  trailer: string,
  hinhAnh: string,
  moTa?: string,
  maNhom: string,
  ngayKhoiChieu?: Date,
  danhGia?: number
}

export interface IMovieDetail extends IMovie {
  lichChieu: any[];
  ngayKhoiChieu: Date;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  MovieList: IMovie[] = [];
  @Output() movieListEmitter = new EventEmitter();

  movieDetail: IMovieDetail;
  @Output() movieDetailEmmiter = new EventEmitter();

  movieStatus = false;
  constructor() { }

  addMovie(movie: IMovie): void {
    this.MovieList.push(movie);
  }

  deleteMovie(maPhim: string): void {
    const index = this.MovieList.findIndex(item => item.maPhim === maPhim);
    if (index !== -1) {
      this.MovieList.splice(index, 1);
    }
  }

  setMovieList(movies: IMovie[]): void {
    this.MovieList = movies;
    this.movieListEmitter.emit(this.MovieList);
  }

  setMovieDetail(moviesDetail: IMovieDetail): void {
    this.movieDetail = moviesDetail;
    this.movieDetailEmmiter.emit(this.movieDetail);
  }

  changeStatus(): void {
    this.movieStatus = true;
    console.log(this.movieStatus);
  }
}
