import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from '../../data.service'
import { REGIONS } from './../region-list';

@Component({
  selector: 'app-vaccine-center',
  templateUrl: './vaccine-center.component.html',
  styleUrls: ['./vaccine-center.component.css']
})
export class VaccineCenterComponent implements OnInit {

  title = 'Vaccine';
  downloadDone = true;
  informations: any = [];
  data : any = [];
  hide = true;
  coordinatesForm: FormGroup;
  regionList = REGIONS;
  item : any;
  subscription : Subscription;

  constructor(private http: HttpClient,
              private sharedData : DataService) {
    this.subscription = this.sharedData.currentId.subscribe(item => this.item = item);
  }

  ngOnInit(): void {
    this.coordinatesForm = new FormGroup({
      region: new FormControl('', [Validators.required]),
      department: new FormControl({value: '', disabled: true}, [Validators.required]),
    });
    this.coordinatesForm.get('region').valueChanges.subscribe(region => {
      this.coordinatesForm.get('department').enable()
   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  hideContent() : boolean {
    console.log(this.item)
    return this.item === 'default';
  }

  hideForm(): boolean {
    return this.hide;
  }

  extractZipCode(department : string) : number {
    const list = department.split(' ');
    var result = (+list[list.length - 1].substring(1, 3)) * 1000;
    return result;
  }

  zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }

  onSubmit(): void {
    if (this.coordinatesForm.get('region').value.name === 'CORSE') {
      this.http.get('http://localhost:8080/AntiCOVID/rest/vaccination_center/region=' + this.coordinatesForm.get('region').value.name,{ responseType: "json" }).subscribe(
        data => {
          this.informations = data;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.http.get('http://localhost:8080/AntiCOVID/rest/vaccination_center/region=' + this.coordinatesForm.get('region').value.name +
    '&zipCode=' + this.extractZipCode(this.coordinatesForm.get('department').value), { responseType: "json" }).subscribe(
        data => {
          this.informations = data;
        },
        error => {
          console.log(error);
        }
      );
    }
    this.hide = !this.hide;
  }

  onFilter() : void {
    this.ngOnInit();
    this.hide = !this.hide;
  }

}
