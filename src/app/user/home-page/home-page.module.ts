import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';
import { FilmTypeSelectorComponent } from './film-type-selector/film-type-selector.component';
import { CurrentFilmComponent } from './current-film/current-film.component';
import { UpcomingFilmComponent } from './upcoming-film/upcoming-film.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [
    HomePageComponent,
    CarouselSliderComponent,
    FilmTypeSelectorComponent,
    CurrentFilmComponent,
    UpcomingFilmComponent,
    FilmItemComponent],
  imports: [CommonModule, LayoutModule
  ],
  exports: [
    HomePageComponent,
    CarouselSliderComponent,
    FilmTypeSelectorComponent,
    CurrentFilmComponent,
    UpcomingFilmComponent
  ]
})
export class HomePageModule { }
