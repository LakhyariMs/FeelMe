import { TestBed } from '@angular/core/testing';

import { ListFilmService } from './list-film.service';

describe('ListFilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListFilmService = TestBed.get(ListFilmService);
    expect(service).toBeTruthy();
  });
});
