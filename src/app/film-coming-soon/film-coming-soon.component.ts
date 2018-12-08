import { Component, OnInit , Input } from '@angular/core';
import {TmdbService} from '../tmdb.service';
import { MovieResult , SearchMovieResponse } from '../tmdb-data/searchMovie';
import {DataService} from '../DataService';

@Component({
  selector: 'app-film-coming-soon',
  templateUrl: './film-coming-soon.component.html',
  styleUrls: ['./film-coming-soon.component.css']
})
export class FilmComingSoonComponent implements OnInit {

  @Input() listMovie: SearchMovieResponse;
  @Input() mode: string;
  @Input() nbr: number;
    constructor(private tmdb: TmdbService,
      private data: DataService) {
        this.data.changeStatusSearch('false');
      setTimeout( () =>
      tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
          .getMovieComingSoon()
          .then( (m: SearchMovieResponse) => console.log(' Films  => Movie' + ':', this.listMovie = m) )
          .catch( err => console.error('Error getTrending:', err) ),
      1000 );
  }

  ngOnInit() {
  }
  get ComingSoonMovies(): MovieResult[] {
    return this.listMovie ? this.listMovie.results : [];
  }
  get getNombre() {
    return this.nbr;
  }
}
