import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import {TmdbService} from '../tmdb.service';
import { MovieResult , SearchMovieResponse, SearchMovieQuery } from '../tmdb-data/searchMovie';
import {PersonQuery} from "../tmdb-data/Person";
import {SearchPeopleQuery, SearchPeopleResponse} from "../tmdb-data/SearchPeople";
import {DataService} from '../DataService';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private listMovie: SearchMovieResponse;
  private listPerson: SearchPeopleResponse;
  checked = false;
  searchMovieQuery : SearchMovieQuery;
  searchPeopleQuery : SearchPeopleQuery;
  @Input() mode: string;
  @Input() nbr: number;
  @Input() typeSearch: string;
  @Output() searchMovieResponse = new EventEmitter();
  @Output() searchPersonResponse = new EventEmitter();
  message:string;
  constructor(private tmdb: TmdbService,
              private data: DataService) {
    this.searchMovieQuery = new class implements SearchMovieQuery {
      include_adult: boolean;
      language: string;
      page: number;
      primary_release_year: number;
      query: string;
      region: string;
      year: number;
    }
    this.searchPeopleQuery = new class implements SearchPeopleQuery{
      language: string;
      query: string;
      page: number;
      include_adult: boolean;
      region: string;
    }
  }

  ngOnInit() {
    this.data.statusBarSearchVar.subscribe(
      mes => {
        if(mes == 'false')
        {
          this.checked = false;
          this.searchMovieQuery = new class implements SearchMovieQuery {
            include_adult: boolean;
            language: string;
            page: number;
            primary_release_year: number;
            query: string;
            region: string;
            year: number;
          }
        }
      }
      );
    this.data.typeSearchVar.subscribe(mes => this.typeSearch = mes);
  }
  showSearchAdvance(){
    if (this.checked)
    {
      this.checked = true;
    }
    else
      this.checked = false;
  }
  search(text: SearchMovieQuery) {
    if (this.typeSearch == 'film')
      this.searchMovie(text);
    else {
      this.searchPeopleQuery.query = text.query;
      this.searchPerson(this.searchPeopleQuery);
    }
  }
  searchMovie(text: SearchMovieQuery) {
    setTimeout( () => {
        this.tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
          .searchMovie(text)
          .then( (m: SearchMovieResponse) => {console.log(' Filns  => Movie' + ':', this.listMovie = m); this.data.changeMessage(JSON.stringify(this.listMovie)) ;} )
          .catch( err => {/*console.error('Error getTrending:', err) ; this.searchMovieResponse.emit("error");*/ this.data.changeMessage("error");} );
      },
      1000 );

  }
  searchPerson(text: SearchPeopleQuery) {
    setTimeout( () => {
        this.tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
          .searchPerson(text)
          .then( (m: SearchMovieResponse) => {console.log(' Acteur IHM  => Movie' + ':', this.listPerson = m) ; this.searchPersonResponse.emit(this.listPerson);} )
          .catch( err => {/*console.error('Error getTrending:', err) ; this.searchPersonResponse.emit("error");*/} );
      },
      1000 );

  }
  get getMovies(): MovieResult[] {
    return this.listMovie ? this.listMovie.results : [];
  }
}
