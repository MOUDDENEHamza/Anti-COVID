import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccinRoutingModule } from './vaccin-routing.module';
import { VaccinComponent } from './vaccin.component';


@NgModule({
  declarations: [VaccinComponent],
  imports: [
    CommonModule,
    VaccinRoutingModule
  ]
})
export class VaccinModule { }
