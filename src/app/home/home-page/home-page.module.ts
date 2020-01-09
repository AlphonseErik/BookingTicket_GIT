import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';
import { FilmTypeSelectorComponent } from './film-type-selector/film-type-selector.component';
import { CurrentFilmComponent } from './current-film/current-film.component';
import { UpcomingFilmComponent } from './upcoming-film/upcoming-film.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    CarouselSliderComponent,
    FilmTypeSelectorComponent,
    CurrentFilmComponent,
    UpcomingFilmComponent,
    FilmItemComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HomePageRoutingModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    CarouselSliderComponent,
    FilmTypeSelectorComponent,
    CurrentFilmComponent,
    UpcomingFilmComponent,
    FilmItemComponent
  ]
})
export class HomePageModule { }
