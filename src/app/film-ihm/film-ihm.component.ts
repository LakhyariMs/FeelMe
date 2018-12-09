import { Component, OnInit, Input } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { Observable } from 'rxjs';
import { MovieResponse } from '../tmdb-data/Movie';
import { ListService } from '../list.service';

import { SimpleSnackBar, MatSnackBarRef } from '@angular/material';
import {MatSnackBar} from '@angular/material';


@Component({
  templateUrl: './film-ihm.component.html',
  selector: 'app-film-ihm',
  styleUrls: ['./film-ihm.component.scss']
})
export class FilmIHMComponent implements OnInit {
  private _movie: MovieResponse;
  private lists: any[] = [];
  public showspinner: Boolean = true;
  @Input() id: number;
  @Input() keylist: string;
  @Input() key: string;
  @Input() inlist = false ;
  constructor(private tmdb: TmdbService, private fireService: ListService,public snackBar: MatSnackBar) {
    setTimeout(() =>
      tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
        .getMovie(this.id)
        .then((m: MovieResponse) => console.log('Film IHM => Movie' + this.id + ':', this._movie = m, this.showspinner = false))
        .catch(err => console.error('Error getting movie:', err)),
      1000);

  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit() {
    this.fireService.getAllList().snapshotChanges().subscribe(lists => {
      this.lists=[];
      lists.forEach(list => {
        const x = list.payload.toJSON();
        x['$key'] = list.key;
        this.lists.push(x);
      });
    });
  }
  get movie(): MovieResponse {
    return this._movie;
  }
  get MovieName(): String {
    return this._movie.original_title;
  }
  get MovieOverView(): String {
    const str2 = this.movie.overview.replace(/(([^\s]+\s\s*){20})(.*)/, '$1…');
    return str2;
  }
  get MovieVoteAvg(): number {
    return this._movie.vote_average * 10;
  }
  get MovieReleaseDate(): String {
    return this.movie.release_date;
  }
  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
  get getListName() {
    return this.lists;
  }

  addToList (keyList: string) {
    let img: string;
    img = `https://image.tmdb.org/t/p/w500${this._movie.poster_path}`;
     this.fireService.testaddmovie2(keyList, this._movie.id, this._movie.original_title, this._movie.release_date, img);
   }

   get movieId(): number {
    return this._movie.id;
  }
   //supprimer un film dans une list
  removemovie(){ 
    this.lists=[]; 
    console.log("remove film:::"+this.key +"idd"+this.keylist);
    this.fireService.removeMovieFromList(this.key,this.keylist);
  }


  ifexiste(key:string){

    let listmovie: any[] = [];
    let nbr:number=0;
  
    this.fireService.getAllMovieOfList(key).snapshotChanges().subscribe(lists => {
      lists.forEach(list => { 
        var x = list.payload.toJSON();
        x['$key'] = list.key;
        listmovie.push(x);
      }) 
      let j:number = 0;
      j=0;
      nbr=nbr+1;
      for(let i=0;i<listmovie.length;i++){
        if(listmovie[i].id===this._movie.id) {j=j+1;   }  
      }

      if(j===1 && nbr===1){ this.snackBar.open('Ce film existe déja dans cette liste !!!', 'Fermer', { duration: 3000 }); }
      else if(j===0 && nbr===1) {  let img:string;
        img=`https://image.tmdb.org/t/p/w500${this._movie.poster_path}`;
          this.fireService.testaddmovie2(key,this._movie.id, this._movie.original_title,this._movie.release_date,img);      
          this.snackBar.open('Ce film est bien ajouté dans cette liste !!!', 'Fermer', { duration: 3000 });
      j=j+1;  }
      
    }) 
     
  }
}
