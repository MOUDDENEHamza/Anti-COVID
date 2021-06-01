import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
<<<<<<< HEAD
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
=======
>>>>>>> 03b4d0bc364d634257be7afd39b527d792652472

import { VaccinRoutingModule } from './vaccin-routing.module';
import { VaccinComponent } from './vaccin.component';


@NgModule({
  declarations: [VaccinComponent],
  imports: [
    CommonModule,
    VaccinRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
<<<<<<< HEAD
    MatDividerModule,
    MatGridListModule,
    MatPaginatorModule
=======
    MatDividerModule
>>>>>>> 03b4d0bc364d634257be7afd39b527d792652472
  ]
})
export class VaccinModule { }
