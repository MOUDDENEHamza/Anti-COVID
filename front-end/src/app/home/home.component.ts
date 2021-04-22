import { Component, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  new_cases_options: any;
  total_cases_options: any;
  recovered_new_cases_options: any;
  death_options: any;
  dates : string[] = [];
  total_cases : string[] = [];
  new_cases : string[] = [];
  recovered : string[] = [];
  death : string[] = [];

  constructor(private http: HttpClient) {
    this.http.get("assets/owid-covid-data.csv", { responseType: "text" }).subscribe(
      data => {
        let csvToRowArray = data.split("\n");
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(",");
          if (row[0] == 'FRA') {
            this.dates.push(row[3]);
            this.total_cases.push(row[4]);
            this.new_cases.push(row[5]);
            this.recovered.push(row[6]);
            this.death.push(row[8]);
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

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
    this.total_cases_options = {
      legend: {
        data: ['total cases'],
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
          name: 'total cases',
          type: 'bar',
          data: this.total_cases,
          animationDelay: (idx) => idx * 2,
        }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 2,
    };
    this.recovered_new_cases_options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['New cases', 'Recovered']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: this.dates
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'New cases',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: this.new_cases
        },
        {
          name: 'Recovered',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: this.recovered
        }
      ]
    };
    this.death_options = {
      legend: {
        data: ['Deaths'],
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
          name: 'Deaths',
          type: 'bar',
          data: this.death,
          animationDelay: (idx) => idx * 2,
        }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 2,
    };
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }

}
