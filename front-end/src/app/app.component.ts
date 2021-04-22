import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Anti COVID';

  public constructor(private titleService: Title) { }

  public setTitle() {
    this.titleService.setTitle('home');
  }

}