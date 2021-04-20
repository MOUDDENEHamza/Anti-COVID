import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REGIONS } from './region-list';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.css']
})
export class VaccinComponent implements OnInit {

  coordinatesForm: FormGroup;
  regionList = REGIONS;

  constructor() { }

  ngOnInit(): void {
    this.coordinatesForm = new FormGroup({
      region: new FormControl('', [Validators.required]),
      department: new FormControl({value: '', disabled: true}, [Validators.required]),
    });
    this.coordinatesForm.get('region').valueChanges.subscribe(region => {
      this.coordinatesForm.get('department').enable()
   })
  }

}
