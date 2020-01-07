import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingFilmComponent } from './upcoming-film.component';

describe('UpcomingFilmComponent', () => {
  let component: UpcomingFilmComponent;
  let fixture: ComponentFixture<UpcomingFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
