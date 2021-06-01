import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CATEGORY } from './category-list';
import { AboutWebsiteComponent } from './about-website/about-website.component';


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

  component = AboutWebsiteComponent;


  constructor() { }

  ngOnInit(): void {
    this.coordinatesForm = new FormGroup({
      category: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    this.nameInformations = this.coordinatesForm.get('category').value.name;
    this.hide = false;
  }

  hideForm(): boolean {
    return this.hide;
  }
}