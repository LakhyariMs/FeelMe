import { Component, OnInit, Input } from '@angular/core';
import {TmdbService} from '../tmdb.service';
import {SearchMovieResponse , MovieResult } from '../tmdb-data/searchMovie';
import {DataService} from '../DataService';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css']
})
export class FilmPageComponent implements OnInit {
  @Input() listMovie: SearchMovieResponse;
  @Input() mode: string;
  @Input() nbr: number;
  constructor(private tmdb: TmdbService,
    private data: DataService) {
this.data.changeStatusSearch('false');
this.getTrending();
}

ngOnInit() {
}
get movies(): MovieResult[] {
  return this.listMovie ? this.listMovie.results : [];
}
get getNombre() {
  return this.nbr;
}
getTrending(){
  //console.log("list movie ;;;;;; " + this.listMovie);
  setTimeout( () =>
      this.tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
        .getTrending(this.mode)
        .then( (m: SearchMovieResponse) => console.log(' Filns  => Movie' + ':', this.listMovie = m) )
        .catch( err => console.error('Error getTrending:', err) ),
    1000 );
}
}
