import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MatCardModule} from '@angular/material/card';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { DeathComponent } from './death/death.component';
import { NewCasesComponent } from './new-cases/new-cases.component';
import { RecoveredComponent } from './recovered/recovered.component';
import { TotalCasesComponent } from './total-cases/total-cases.component';


@NgModule({
  declarations: [
    StatisticsComponent,
    DeathComponent,
    NewCasesComponent,
    RecoveredComponent,
    TotalCasesComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    NgxChartsModule,
    MatCardModule
  ]
})
export class StatisticsModule { }
