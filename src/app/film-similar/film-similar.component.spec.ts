import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSimilarComponent } from './film-similar.component';

describe('FilmSimilarComponent', () => {
  let component: FilmSimilarComponent;
  let fixture: ComponentFixture<FilmSimilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmSimilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
