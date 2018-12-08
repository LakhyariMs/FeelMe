import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase , AngularFireList } from '@angular/fire/database';
import { ListFilm } from './listFilm' ;

@Injectable({
  providedIn: 'root'
})
export class ListFilmService {
  private dbPath = '/test' ;
  listRef: AngularFireList<ListFilm> = null ;
  private list: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.listRef = db.list(this.dbPath);
  }
  addMovie(film: ListFilm): void {
    this.listRef.push(film);
  }
  // getList():  Observable<any[]> {
  //   return this.list;
  // }
  // public addMovie(listName: string , movieId: number): void {
  //   this.db.list('/test').push({ listName: listName , id : movieId });
  // }
  // public getMovieList(listName: string ) {
  //   return this.db.list('test' , ref => ref.orderByChild('listName').equalTo(listName));
  // }
}
