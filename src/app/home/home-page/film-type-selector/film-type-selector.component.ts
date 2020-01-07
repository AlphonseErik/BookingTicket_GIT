import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-type-selector',
  templateUrl: './film-type-selector.component.html',
  styleUrls: ['./film-type-selector.component.scss']
})
export class FilmTypeSelectorComponent implements OnInit {

  isCurrentFilm: boolean = true;
  constructor() { }

  displayCurrentFilm(): void {
    this.isCurrentFilm = true;
  }

  displayUpcomingFilm(): void {
    this.isCurrentFilm = false;
  }
  ngOnInit() {
  }

}
