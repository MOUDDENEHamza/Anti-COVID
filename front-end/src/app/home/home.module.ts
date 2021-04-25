import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { MatCardModule} from '@angular/material/card';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewCasesComponent } from './new-cases/new-cases.component';
import { TotalCasesComponent } from './total-cases/total-cases.component';
import { RecoveredNewCasesComponent } from './recovered-new-cases/recovered-new-cases.component';
import { DeathComponent } from './death/death.component';
@NgModule({
  declarations: [HomeComponent, NewCasesComponent, TotalCasesComponent, RecoveredNewCasesComponent, DeathComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MatCardModule
  ]
})
export class HomeModule { }
