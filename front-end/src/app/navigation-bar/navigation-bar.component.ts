import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @Input('title') title : string;
  subscription : Subscription;
  id : number;
  firstName : string;

  constructor(private data : DataService) {
    this.subscription = this.data.currentId.subscribe(id => this.id = id);
  }

  ngOnInit() : void { }

  ngOnDestroy() : void {
    this.subscription.unsubscribe();
  }

  onLogOut() : void {
    this.data.changeMessage(0);
  }

}
