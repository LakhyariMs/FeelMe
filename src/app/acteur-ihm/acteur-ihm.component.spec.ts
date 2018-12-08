import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActeurIhmComponent } from './acteur-ihm.component';

describe('ActeurIhmComponent', () => {
  let component: ActeurIhmComponent;
  let fixture: ComponentFixture<ActeurIhmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActeurIhmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActeurIhmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
