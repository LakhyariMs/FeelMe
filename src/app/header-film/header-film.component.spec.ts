import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFilmComponent } from './header-film.component';

describe('HeaderFilmComponent', () => {
  let component: HeaderFilmComponent;
  let fixture: ComponentFixture<HeaderFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
