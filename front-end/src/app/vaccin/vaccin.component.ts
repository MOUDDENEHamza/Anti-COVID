import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REGIONS } from './region-list';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.css']
})
export class VaccinComponent implements OnInit {

  title = 'Vaccin';
  downloadDone = true;
  informations: any = [];
  data : any = [];
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

  hideContent() : boolean {
    if (this.informations.length === 2228) {
      this.downloadDone = true;
    }
    return this.downloadDone;
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
