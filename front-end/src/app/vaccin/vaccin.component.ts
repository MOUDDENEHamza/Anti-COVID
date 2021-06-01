import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { REGIONS } from './region-list';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.css']
})
export class VaccinComponent implements OnInit, OnDestroy {

  title = 'Vaccin';
  downloadDone = false;
  informations: any = [];
  coordinatesForm: FormGroup;
  regionList = REGIONS;
  item : any;
  subscription : Subscription;

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/AntiCOVID/rest/vaccination_center', { responseType: "json" }).subscribe(
      data => {
        this.informations = data;
      },
      error => {
        console.log(error);
      }
    );
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

  hideContent() : boolean {
    if (this.informations.length === 2228) {
      this.downloadDone = true;
    }
    return this.downloadDone;
  }

  hideForm(): boolean {
    return false;
  }

  onSubmit(): void {
    this.http.get('http://localhost:8080/AntiCOVID/rest/vaccination_center', { responseType: "json" }).subscribe(
      data => {
        console.log(data);
        this.informations = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
