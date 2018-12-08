import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private list: AngularFireList<any>;
  private listMovie: AngularFireList<any>;


  constructor(public db: AngularFireDatabase) {
  }

  getAllList() {
    return this.db.list('items');
  }
  update(listName: string, listcle: string) {
    this.db.object('/items/' + listcle).update({ content: listName });
  }

  addMovieList(listName: string) {
    this.db.list('items').push({ content: listName });
  }

  removeMovieList(key: string) {
    console.log(key);
    this.db.list('items').remove(key);
  }
  // MovieResponse
  public addMovie(listName: string, movieId: number): void {
    this.db.list('test').push({listName : listName , movieID : movieId });
  }

  getMoviesFromList(listName: string ) {
    return this.db.list('test');
  }
  testaddmovie(id: string, title: string, Réalisateur: string) {
    this.db.list('items/-LSf358buoD9sosywFe8/movie').push({ id: id, title: title, Réalisateur: Réalisateur });

   }
   testaddmovie2( keylist: string, id: number, title: string, date: string, img: string) {
    this.db.list('items/' + keylist + '/movie').push({ id: id, title: title, date : date, img : img });

   }
   getAllMovieOfList(keylist: string) {
    this.listMovie = this.db.list('items/' + keylist + '/movie');
    console.log('listeMovies :' + this.listMovie);

    return this.listMovie;
   }
}
