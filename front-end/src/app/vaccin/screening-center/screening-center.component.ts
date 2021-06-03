import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REGIONS } from '../region-list';

@Component({
  selector: 'app-screening-center',
  templateUrl: './screening-center.component.html',
  styleUrls: ['./screening-center.component.css']
})
export class ScreeningCenterComponent implements OnInit {

  title = 'Screening Center';
  centers : any;
  hide = true;
  coordinatesForm: FormGroup;
  regionList = REGIONS;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.coordinatesForm = new FormGroup({
      region: new FormControl('', [Validators.required]),
      department: new FormControl({value: '', disabled: true}, [Validators.required]),
    });
    this.coordinatesForm.get('region').valueChanges.subscribe(region => {
      this.coordinatesForm.get('department').enable()
   });
  }

  onSearch() : void {
    const list = this.coordinatesForm.get('department').value.split(' ');
    var zipCode = (+list[list.length - 1].substring(1, 3)) * 1000;
    this.http.get('http://localhost:8080/AntiCOVID/rest/test_center/' + zipCode,{ responseType: "json" }).subscribe(
      data => {
        console.log(data)
        this.centers = data;
      },
      error => {
        console.log(error);
      }
    );
    this.hide = !this.hide;
  }

  hideForm(): boolean {
    return this.hide;
  }

  onFilter() : void {
    this.ngOnInit();
    this.hide = !this.hide;
  }

}
