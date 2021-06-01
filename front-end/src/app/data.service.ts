import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private idSource = new BehaviorSubject(0);
  currentId = this.idSource.asObservable();

  constructor() { }

  changeMessage(id : number) : void {
    this.idSource.next(id);
  }

}
