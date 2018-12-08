import { Component, OnInit } from '@angular/core';
import {RouterModule , Routes , ActivatedRoute} from '@angular/router';
import {SearchMovieResponse} from "../tmdb-data/searchMovie";
import {TmdbService} from "../tmdb.service";
import {DataService} from '../DataService';

@Component({
  selector: 'app-show-films',
  templateUrl: './show-films.component.html',
  styleUrls: ['./show-films.component.css']
})
export class ShowFilmsComponent implements OnInit {
  private mode: string ;
  private sub: any;
  listMovie: SearchMovieResponse;
  error = true;
  constructor(private route: ActivatedRoute, private tmdb: TmdbService, private data: DataService ) {
    this.data.changeTypeSearch('film');
    this.data.changeStatusSearch('false');
    this.sub = this.route.params.subscribe(params => {
      this.mode = params['mode'];
    });
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {this.displaySearch(message); })
  }
  get getMode() {
    return this.mode;
  }

  displaySearch($event){
    if ($event != "error" && $event != null){
      this.error = false;
      this.listMovie = JSON.parse($event);
    }else
    {
      this.error = true;
      if(this.mode == 'popular')
        this.getTrending();
      if (this.mode == 'topRated')
        this.getMovieTopRated();
      if (this.mode == 'comingsoon')
        this.getMovieComingSoon();
    }
  }
  getTrending(){
    setTimeout( () =>
        this.tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
          .getTrending(this.mode)
          .then( (m: SearchMovieResponse) => console.log(' Filns  => Movie' + ':', this.listMovie = m) )
          .catch( err => console.error('Error getTrending:', err) ),
      1000 );
  }

  getMovieTopRated(){
    setTimeout( () =>
        this.tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
          .getMovieTopRated()
          .then( (m: SearchMovieResponse) => console.log(' Filns  => Movie' + ':', this.listMovie = m) )
          .catch( err => console.error('Error getTrending:', err) ),
      1000 );
  }
  getMovieComingSoon(){
    setTimeout( () =>
        this.tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
          .getMovieComingSoon()
          .then( (m: SearchMovieResponse) => console.log(' Films  => Movie' + ':', this.listMovie = m) )
          .catch( err => console.error('Error getTrending:', err) ),
      1000 );}

}
