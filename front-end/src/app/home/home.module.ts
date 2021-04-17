import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule }from '@swimlane/ngx-charts';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxChartsModule
  ]
})
export class HomeModule { }
