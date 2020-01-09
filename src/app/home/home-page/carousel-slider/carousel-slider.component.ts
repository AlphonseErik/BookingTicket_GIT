import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselSliderComponent implements OnInit {

  images = [1, 2, 3].map((n) => `../../../assets/img/carousel-${n}.jpg`);

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.pauseOnHover = true;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {
  }

}
