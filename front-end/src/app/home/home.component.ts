import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get("assets/owid-covid-data.csv", { responseType: "text" }).subscribe(
      data => {
        let csvToRowArray = data.split("\n");
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(",");
          if (row[0] == 'FRA') {
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
