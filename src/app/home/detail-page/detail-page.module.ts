import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { LayoutModule } from '../layout/layout.module';
import { DetailPageRoutingModule } from './detail-page-routing.module';
import { FilmItemDetailComponent } from './film-item-detail/film-item-detail.component';
import { ShowTimesComponent } from './show-times/show-times.component';
import { DetailPageSelectorComponent } from './detail-page-selector/detail-page-selector.component';
import { RateComponent } from './rate/rate.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DetailPageComponent,
    FilmItemDetailComponent,
    ShowTimesComponent,
    DetailPageSelectorComponent,
    RateComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    DetailPageRoutingModule,
    RouterModule
  ],
  exports: [
    DetailPageComponent,
  ]
})
export class DetailPageModule { }
