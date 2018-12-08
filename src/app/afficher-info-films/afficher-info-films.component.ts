import { Component, OnInit, Input } from '@angular/core';
import { PersonResponse } from '../tmdb-data/Person';
import { MovieResponse } from '../tmdb-data/Movie';
import {RouterModule , Routes , ActivatedRoute} from '@angular/router';
import {TmdbService} from '../tmdb.service';
import { ListService } from '../list.service';


@Component({
  selector: 'app-afficher-info-films',
  templateUrl: './afficher-info-films.component.html',
  styleUrls: ['./afficher-info-films.component.css']
})


export class AfficherInfoFilmsComponent implements OnInit {

  public aime: boolean;
  private sub: any;
  private movie: number;
  private _movie: MovieResponse;
  public info: any = true;
  private lists: any[] = [];


  constructor(private route: ActivatedRoute, private tmdb: TmdbService , private firesevc: ListService ) {
    this.sub = this.route.params.subscribe(params => {
      this.movie = params['id'];
});
setTimeout( () =>
    tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
        .getMovie(this.movie)
        .then( (m: MovieResponse) =>  this._movie = m )
        .catch( err => console.error('Error getting movie:', err) ),
    1000 );

   }
   public itemValue = '';

   ngOnInit() {
    this.aime = false;
    this.firesevc.getAllList().snapshotChanges().subscribe(lists => {
      lists.forEach(list => {
        const x = list.payload.toJSON();
        x['$key'] = list.key;
        this.lists.push(x);
      });
    });
  }

  onSubmit() {
    if (this.itemValue.length !== 0) {
      this.firesevc.addMovieList(this.itemValue);
      let img: string;
      const listKey = '';
      img = `https://image.tmdb.org/t/p/w500${this._movie.poster_path}`;

      // for (const item of this.getlist) {
      //   if (item.content === this.itemValue) {
      //    console.log('in the box babby');
      //     listKey = item.$key;
          this.firesevc.testaddmovie2(listKey, this._movie.id, this._movie.original_title, this._movie.release_date, img);

        // }
      // }

      this.itemValue = '';
    }
  }
  get MovieName(): string {
    if (this._movie) {
      return this._movie.original_title;
  } else {
    return null;
  }
  }
  get MovieNote(): any {
    if (this._movie) {
        return this._movie.vote_average * 10;
    }
      return null;
  }
  get MovieResume(): string {
    if (this._movie) {
      return this._movie.overview;
    }
    return null;
  }
  get MovieCheminAffiche(): string {
    if (this._movie) {
      return this._movie.poster_path;
    }
  }
  get MovieId(): number {
    if (this._movie) {
      return this._movie.id;
    }
    return null;
  }
  get getlist() {
    return this.lists;
  }
  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  addToList (keyList: string) {
    this.lists = [];
    let img: string;
    img = `https://image.tmdb.org/t/p/w500${this._movie.poster_path}`;
     this.firesevc.testaddmovie2(keyList, this._movie.id, this._movie.original_title, this._movie.release_date, img);
   }

   addList(nomListe: string ) {
     this.firesevc.addMovieList(nomListe);
   }

}
