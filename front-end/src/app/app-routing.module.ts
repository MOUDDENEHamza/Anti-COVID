import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'vaccin', loadChildren: () => import('./vaccin/vaccin.module').then(m => m.VaccinModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
<<<<<<< HEAD
  { path: 'forum', loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'statistics', loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule) },
  { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) }
=======
  { path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'sign-in', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'forum', loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule) }
>>>>>>> 03b4d0bc364d634257be7afd39b527d792652472
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }