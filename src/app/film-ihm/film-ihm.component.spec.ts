import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmIHMComponent } from './film-ihm.component';

describe('FilmIHMComponent', () => {
  let component: FilmIHMComponent;
  let fixture: ComponentFixture<FilmIHMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmIHMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmIHMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
