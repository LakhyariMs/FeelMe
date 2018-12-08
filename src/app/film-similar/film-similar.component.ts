import { Component, OnInit, Input } from '@angular/core';
import {TmdbService} from './../tmdb.service';
import {SearchMovieResponse, MovieResult} from './../tmdb-data/searchMovie';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-film-similar',
  templateUrl: './film-similar.component.html',
  styleUrls: ['./film-similar.component.css']
})
export class FilmSimilarComponent implements OnInit {

  @Input() id: number;

  private _movie: SearchMovieResponse;

  constructor(private tmdb: TmdbService, public anAuth: AngularFireAuth, private db: AngularFireDatabase) {
    setTimeout( () =>
      tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
          .movieSimilar(this.id)
          .then( (m: SearchMovieResponse) =>   this._movie = m )
          .catch( err => console.error('Error getting movie:', err) ),
      1000 );
  }

  ngOnInit() {
  }

  get movies(): MovieResult[] {
    return this._movie ? this._movie.results : [];
  }
}
