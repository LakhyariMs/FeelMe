import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  private typeSearchIn = new BehaviorSubject('film');
  typeSearchVar = this.typeSearchIn.asObservable();

  private statusBarSearch = new BehaviorSubject('false');
  statusBarSearchVar = this.statusBarSearch.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  changeTypeSearch(typeSearch: string)
  {
    this.typeSearchIn.next(typeSearch);
  }
  changeStatusSearch(statusSearch: string)
  {
    this.statusBarSearch.next(statusSearch);
  }
}
