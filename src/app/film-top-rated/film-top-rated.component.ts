import { Component, OnInit, Input } from '@angular/core';
import {TmdbService} from '../tmdb.service';
import { MovieResult , SearchMovieResponse } from '../tmdb-data/searchMovie';
import {DataService} from '../DataService';

@Component({
  selector: 'app-film-top-rated',
  templateUrl: './film-top-rated.component.html',
  styleUrls: ['./film-top-rated.component.css']
})
export class FilmTopRatedComponent implements OnInit {
  @Input() listMovie: SearchMovieResponse;
  @Input() mode: string;
  @Input() nbr: number;
    constructor(private tmdb: TmdbService,
      private data: DataService) {
        this.data.changeStatusSearch('false');
      setTimeout( () =>
      tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
          .getMovieTopRated()
          .then( (m: SearchMovieResponse) => console.log(' Filns  => Movie' + ':', this.listMovie = m) )
          .catch( err => console.error('Error getTrending:', err) ),
      1000 );
  }

  ngOnInit() {
  }
  get TopRankedMovies(): MovieResult[] {
    return this.listMovie ? this.listMovie.results : [];  
  }
  get getNombre() {
    return this.nbr;
  }



}
