import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GetDataService } from '../get-data.service';

export var multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "1990",
        "value": 62000000
      },
      {
        "name": "1991",
        "value": 73000000
      },
      {
        "name": "1992",
        "value": 89400000
      },
      {
        "name": "1993",
        "value": 250000000
      },
      {
        "name": "1994",
        "value": 309000000
      },
      {
        "name": "1995",
        "value": 311000000
      },
      {
        "name": "1996",
        "value": 58000000
      },
      {
        "name": "1997",
        "value": 50000020
      },
      {
        "name": "1998",
        "value": 58000000
      },
      {
        "name": "1999",
        "value": 57000000
      },
      {
        "name": "2000",
        "value": 62000000
      }
    ]
  }
];

@Component({
  selector: 'app-new-cases',
  templateUrl: './new-cases.component.html',
  styleUrls: ['./new-cases.component.css']
})
export class NewCasesComponent implements OnInit {
  
  multi: any[];
  view: any[] = [1000, 400];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#7aa3e5']
  };

  constructor(private getData: GetDataService) {
    Object.assign(this, { multi });
  }

  ngOnInit(): void {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
