import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../auth/sign-in/sign-in.component';

import { VaccinComponent } from './vaccin.component';

const routes: Routes = [
  { path: '', component: VaccinComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccinRoutingModule { }
