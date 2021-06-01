import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCovidComponent } from './about-covid/about-covid.component';
import { AboutVaccineComponent } from './about-vaccine/about-vaccine.component';
import { AboutWebsiteComponent } from './about-website/about-website.component';
import { FaqComponent } from './faq.component';
import { OthersComponent } from './others/others.component';

const routes: Routes = [{ path: '', component: FaqComponent}, {path:'aboutWebsite', component: AboutWebsiteComponent }, {path:'others', component: OthersComponent }, {path:'covid', component: AboutCovidComponent }, {path:'vaccine', component: AboutVaccineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
