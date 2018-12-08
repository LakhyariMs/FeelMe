import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherInfoFilmsComponent } from './afficher-info-films.component';

describe('AfficherInfoFilmsComponent', () => {
  let component: AfficherInfoFilmsComponent;
  let fixture: ComponentFixture<AfficherInfoFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherInfoFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherInfoFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
