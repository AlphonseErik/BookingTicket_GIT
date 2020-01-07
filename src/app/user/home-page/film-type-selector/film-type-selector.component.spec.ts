import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTypeSelectorComponent } from './film-type-selector.component';

describe('FilmTypeSelectorComponent', () => {
  let component: FilmTypeSelectorComponent;
  let fixture: ComponentFixture<FilmTypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmTypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
