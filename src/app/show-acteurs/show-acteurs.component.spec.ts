import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActeursComponent } from './show-acteurs.component';

describe('ShowActeursComponent', () => {
  let component: ShowActeursComponent;
  let fixture: ComponentFixture<ShowActeursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowActeursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowActeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
