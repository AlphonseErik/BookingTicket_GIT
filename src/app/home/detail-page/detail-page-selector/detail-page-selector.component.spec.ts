import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPageSelectorComponent } from './detail-page-selector.component';

describe('DetailPageSelectorComponent', () => {
  let component: DetailPageSelectorComponent;
  let fixture: ComponentFixture<DetailPageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPageSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
