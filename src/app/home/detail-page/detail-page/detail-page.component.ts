import { Component, OnInit } from '@angular/core';
import { IMovieDetail, MovieService } from 'src/app/services/movie.service';
import { MovieGateway } from 'src/app/gateways/movie.gateway';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  movieDetail: IMovieDetail;
  constructor(
    private _movieDetailService: MovieService,
    private _movieGateway: MovieGateway,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.movieDetail = this._movieDetailService.movieDetail;
    this._movieDetailService.movieDetailEmmiter.subscribe((newMovieDetail: IMovieDetail) => {
      this.movieDetail = newMovieDetail;
    })
    //get param from url
    this._activatedRoute.params.subscribe(params => {
      // console.log(params)
      this._movieGateway.fetchMovieDetail(params.id).subscribe(
        (res: IMovieDetail) => {
          console.log(res);
          this._movieDetailService.setMovieDetail(res);
        },
        err => {
          console.log(err)
        })
    });
  }

}
