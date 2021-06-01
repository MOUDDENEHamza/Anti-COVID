import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CATEGORY } from './category-list';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  title = 'FAQ';

  hide = true;
  coordinatesForm: FormGroup;
  categoryList = CATEGORY;
  nameInformations : any;
  informations : any;


  constructor() { }

  ngOnInit(): void {
    this.coordinatesForm = new FormGroup({
      category: new FormControl('', [Validators.required]),
    });
    this.coordinatesForm.get('category').valueChanges.subscribe(category => {
      this.coordinatesForm.get('infos').enable()
   });
  }

  onSubmit(): void {
    this.nameInformations = this.coordinatesForm.get('category').value.name;
    this.informations = this.coordinatesForm.get('category').value.infos;
    this.hide = false;
  }

  hideContent() : boolean {
    console.log(this.informations)
    return this.informations === 'default';
  }

  hideForm(): boolean {
    return this.hide;
  }

  getInfo() : any {
    return this.informations;
  } 

}