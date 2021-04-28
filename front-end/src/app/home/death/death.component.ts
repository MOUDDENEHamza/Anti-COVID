import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.css']
})
export class DeathComponent implements OnInit {

  data: any[];
  view: any[] = [1000, 400];

  // options
  legend: boolean = true;
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
    domain: ['#DC143C']
  };

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/AntiCOVID/rest/death', { responseType: "json" }).subscribe(
      data => {
        Object.assign(this, { data });
      },
      error => {
        console.log(error);
      }
    );
    
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
