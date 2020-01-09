import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-page-selector',
  templateUrl: './detail-page-selector.component.html',
  styleUrls: ['./detail-page-selector.component.scss']
})
export class DetailPageSelectorComponent implements OnInit {

  isActive: boolean = true;
  constructor() { }

  displayShowTime(): void {
    this.isActive = true;
  }

  displayMovieDetail(): void {
    this.isActive = false;
  }

  ngOnInit() {
  }

}
