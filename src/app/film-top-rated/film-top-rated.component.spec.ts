import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTopRatedComponent } from './film-top-rated.component';

describe('FilmTopRatedComponent', () => {
  let component: FilmTopRatedComponent;
  let fixture: ComponentFixture<FilmTopRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmTopRatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
