import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAuteurComponent } from './profil-auteur.component';

describe('ProfilAuteurComponent', () => {
  let component: ProfilAuteurComponent;
  let fixture: ComponentFixture<ProfilAuteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilAuteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
