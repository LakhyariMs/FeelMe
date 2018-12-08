import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { SearchPeopleResponse } from '../tmdb-data/SearchPeople';

@Component({
  selector: 'app-show-acteurs',
  templateUrl: './show-acteurs.component.html',
  styleUrls: ['./show-acteurs.component.css']
})
export class ShowActeursComponent implements OnInit {
  private listperson: SearchPeopleResponse;
  constructor(private tmdb: TmdbService) {
    setTimeout( () =>
    tmdb.init('6038eeec002660fd69b5e12765e35df3') // Clef de TMDB
        .getPopularPerson()
        .then( (m: SearchPeopleResponse) => console.log(' acteur  => Person' + ':', this.listperson = m) )
        .catch( err => console.error('Error getTrending:', err) ),
    1000 );
  }

  ngOnInit() {
  }
  get getPerson() {
    return this.listperson ? this.listperson.results : [];
  }

}
