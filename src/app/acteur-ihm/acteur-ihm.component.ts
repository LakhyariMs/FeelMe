import { Component, OnInit, Input } from '@angular/core';
import {TmdbService} from '../tmdb.service';
import {PersonResponse} from '../tmdb-data/Person';



@Component({
  selector: 'app-acteur-ihm',
  templateUrl: './acteur-ihm.component.html',
  styleUrls: ['./acteur-ihm.component.css']
})
export class ActeurIhmComponent implements OnInit {
  private _person: PersonResponse;
  @Input() id: number;
  showspinner: Boolean = true;
  constructor(private tmdb: TmdbService) {
    setTimeout( () =>
    tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
        .getPerson(this.id)
        .then( (m: PersonResponse) => console.log('Acteur IHM => Acteur' + this.id + ':', this._person = m , this.showspinner = false) )
        .catch( err => console.error('Error getting person:', err) ),
    1000 );

  }
  ngOnInit() {
  }
  get person(): PersonResponse {
    return this._person;
  }
  get personName(): String {
    return this._person.name;
  }
  get personId(): number {
    return this.person.id;
  }
  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

}
