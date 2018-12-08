import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { TmdbService } from './../tmdb.service';
import { MovieResponse } from './../tmdb-data/Movie';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { filter } from 'rxjs/operators';
import { SearchMovieQuery, SearchMovieResponse } from '../tmdb-data/searchMovie';
import {NavigationEnd, Router} from '@angular/router';
import {DataService} from '../DataService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
navigationSubscription;
listMovie: SearchMovieResponse;
error = true;
nbr = 5;
@Input() mode: string;
message:string;
constructor(
  private router: Router,
  private tmdb: TmdbService,
  private data: DataService) {
  this.data.changeTypeSearch('film');
  this.data.changeStatusSearch('false');
  this.navigationSubscription = this.router.events.subscribe((e: any) => {
    // If it is a NavigationEnd event re-initalise the component
    if (e instanceof NavigationEnd) {
      //this.initialiseInvites();
    }
  });
}
displaySearch($event){
  if ($event != "error" && $event != null){
    this.error = false;
    this.listMovie = JSON.parse($event);
     this.nbr = this.listMovie.results.length;
  }else
  {
    this.error = true;
    this.getTrending();
    this.nbr =5;
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

ngOnDestroy(): void {
}

ngOnInit(): void {
  this.data.currentMessage.subscribe(message => {this.message = message; this.displaySearch(this.message); })
  if (this.navigationSubscription) {
    this.navigationSubscription.unsubscribe();
  }
}
}