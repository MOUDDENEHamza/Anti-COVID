import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private itemSource = new BehaviorSubject('default');
  currentItem = this.itemSource.asObservable();

  constructor() { }

  changeMessage(item : any) {
    this.itemSource.next(item)
  }

}
