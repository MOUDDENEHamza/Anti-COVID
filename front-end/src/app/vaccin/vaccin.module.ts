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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';

import { VaccinRoutingModule } from './vaccin-routing.module';
import { VaccinComponent } from './vaccin.component';
import { ScreeningCenterComponent } from './screening-center/screening-center.component';
import { VaccineCenterComponent } from './vaccine-center/vaccine-center.component';


@NgModule({
  declarations: [VaccinComponent, ScreeningCenterComponent, VaccineCenterComponent],
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
    MatDividerModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTabsModule
  ]
})
export class VaccinModule { }
