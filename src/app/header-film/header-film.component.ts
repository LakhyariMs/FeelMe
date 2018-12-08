import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header-film',
  templateUrl: './header-film.component.html',
  styleUrls: ['./header-film.component.css']
})
export class HeaderFilmComponent implements OnInit {
  @Input() typeSearch: string;
  @Output() searchMovieResponse = new EventEmitter();
  @Output() searchPersonResponse = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  displaySearch($event){
    //console.log("result : " + JSON.stringify($event));
  }
}