import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Overview {
  
  id : number;
  date : string;
  newCases : number;
  death : number;
  recovered : number;
  totalCases : number;

  constructor(id : number, date : string, newCases : number, death : number, recovered : number, totalCases : number) {
    this.id = id;
    this.date = date;
    this.newCases = newCases;
    this.death = death;
    this.recovered = recovered;
    this.totalCases = totalCases;
  }

}

@Component({
  selector: 'app-today-overview',
  templateUrl: './today-overview.component.html',
  styleUrls: ['./today-overview.component.css']
})
export class TodayOverviewComponent implements OnInit {

  overview : any;

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/AntiCOVID/rest/daily_overview', { responseType: "json" }).subscribe(
      data => {
        this.overview = data;
      },
      error => {
      }
    );
  }

  ngOnInit(): void {
  }

}
