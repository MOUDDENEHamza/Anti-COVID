import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cases',
  templateUrl: './new-cases.component.html',
  styleUrls: ['./new-cases.component.css']
})
export class NewCasesComponent implements OnInit {
  
  data: any[];
  view: any[] = [600, 400];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#7aa3e5']
  };

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/AntiCOVID/rest/new_cases', { responseType: "json" }).subscribe(
      data => {
        Object.assign(this, { data });
      },
      error => {
        console.log(error);
      }
    );
    
  }

  ngOnInit(): void { }

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
