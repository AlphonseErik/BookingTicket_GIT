import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/services/movie.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  @Input() FilmItem: IMovie;
  constructor() { }

  ngOnInit() {
    console.log(this.FilmItem);
  }

}
