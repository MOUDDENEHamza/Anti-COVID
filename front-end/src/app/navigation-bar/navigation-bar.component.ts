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
  item : any;
  subscription : Subscription;

  constructor(private data : DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentItem.subscribe(item => this.item = item);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLogOut() : void {
    this.data.changeMessage('default');
  }

}
