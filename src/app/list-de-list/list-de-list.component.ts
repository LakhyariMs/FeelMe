import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ListService } from '../list.service';



@Component({
  selector: 'app-list-de-list',
  templateUrl: './list-de-list.component.html',
  styleUrls: ['./list-de-list.component.css']
})
export class ListDeListComponent implements OnInit {

  public lists: any[] = [];

  constructor(private fireSevc: ListService) {

  }

  ngOnInit() {
    this.fireSevc.getAllList().snapshotChanges().subscribe(lists => {
      lists.forEach(list => {
        const x = list.payload.toJSON();
        x['$key'] = list.key;
        this.lists.push(x);
      });
    });
  }

  addList(item) {
    this.lists = [];
    if (item.value.length !== 0) {
      this.fireSevc.addMovieList(item.value);
      item.value = null;
    }

  }
  get getlist() { // retourne tous les listes sauvegarder
    return this.lists;
  }
}
