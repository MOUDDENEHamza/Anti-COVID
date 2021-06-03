import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { AboutWebsiteComponent } from './about-website/about-website.component';
import { OthersComponent } from './others/others.component';
import { AboutCovidComponent } from './about-covid/about-covid.component';
import { AboutVaccineComponent } from './about-vaccine/about-vaccine.component';


@NgModule({
  declarations: [
    FaqComponent,
    AboutWebsiteComponent,
    OthersComponent,
    AboutCovidComponent,
    AboutVaccineComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatPaginatorModule
  ]
})
export class FaqModule { }