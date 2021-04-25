import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cases',
  templateUrl: './new-cases.component.html',
  styleUrls: ['./new-cases.component.css']
})
export class NewCasesComponent implements OnInit {
  
  new_cases_options: any;
  dates : string[] = [];
  new_cases : string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.new_cases_options = {
      legend: {
        data: ['new cases'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.dates,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'new cases',
          type: 'bar',
          data: this.new_cases,
          animationDelay: (idx) => idx * 2,
        }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 2,
    };
  }

}
