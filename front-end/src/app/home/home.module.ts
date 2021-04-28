import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MatCardModule} from '@angular/material/card';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewCasesComponent } from './new-cases/new-cases.component';
import { TotalCasesComponent } from './total-cases/total-cases.component';
import { DeathComponent } from './death/death.component';
import { RecoveredComponent } from './recovered/recovered.component';
@NgModule({
  declarations: [HomeComponent, NewCasesComponent, TotalCasesComponent, DeathComponent, RecoveredComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxChartsModule,
    MatCardModule
  ]
})
export class HomeModule { }
