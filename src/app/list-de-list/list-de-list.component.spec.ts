import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeListComponent } from './list-de-list.component';

describe('ListDeListComponent', () => {
  let component: ListDeListComponent;
  let fixture: ComponentFixture<ListDeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
