import { Component, OnInit, Input } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { PersonResponse } from '../tmdb-data/Person';
import { MovieResponse } from '../tmdb-data/Movie';
import { SearchMovieResponse, MovieResult } from '../tmdb-data/searchMovie';
import { R3ResolvedDependencyType } from '@angular/compiler';
import {RouterModule , Routes , ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-profil-auteur',
  templateUrl: './profil-auteur.component.html',
  styleUrls: ['./profil-auteur.component.css']
})
export class ProfilAuteurComponent implements OnInit {
  public auteur: PersonResponse;
  private id: number;
  private sub: any;
  public numbers: Array<Number>;
  private listmovie: SearchMovieResponse;
  constructor(private tmdb: TmdbService , private route: ActivatedRoute ) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    setTimeout(() =>
      tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
        .getPerson(this.id)
        .then((m: PersonResponse) => console.log('Auteur IHM => auteur' + this.id + ':', this.auteur = m))
        .catch(err => console.error('Error getting auteur:', err)),
      1000);

    setTimeout(() =>
      tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
        .getActorMovies(this.id)
        .then((m: SearchMovieResponse) => console.log('Film IHM => film' + this.id + ':', this.listmovie = m))
        .catch(err => console.error('Error getting auteur:', err)),
      1000);
    this.numbers = Array(5).fill(0).map((x, i) => i);
   });
  }

  ngOnInit() {
  }
  get movies(): SearchMovieResponse {
    return this.listmovie;
  }
  get auteurName(): string {
    return this.auteur.name;
  }
  get auteurpopulation(): number {
    return this.auteur.popularity;
  }
  get biography(): string {
    return this.auteur.biography;
  }
  get birthday(): string {
    return this.auteur.birthday;
  }
  get palcebirthday(): string {
    return this.auteur.place_of_birth;
  }
  get knownfordepart(): string {
    return this.auteur.known_for_department;
  }
  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
  get gender(): string {
    if (this.auteur.gender === 2) { return 'Homme'; }
    if (this.auteur.gender === 1) { return 'Femme'; }
     return 'Non binaire';
  }
  get alsoknown(): string {
    let str1: string;
    for (const i in this.auteur.also_known_as) {
      str1 = ' ' + this.auteur.also_known_as[i];
    }
    return str1;
  }
  get imdb(): string {
    return this.auteur.imdb_id;
  }

  get homepage(): string {
    return this.auteur.homepage;
  }


}
