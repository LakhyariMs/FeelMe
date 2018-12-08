import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmComingSoonComponent } from './film-coming-soon.component';

describe('FilmComingSoonComponent', () => {
  let component: FilmComingSoonComponent;
  let fixture: ComponentFixture<FilmComingSoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmComingSoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
