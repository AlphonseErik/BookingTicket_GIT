import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFilmComponent } from './current-film.component';

describe('CurrentFilmComponent', () => {
  let component: CurrentFilmComponent;
  let fixture: ComponentFixture<CurrentFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
