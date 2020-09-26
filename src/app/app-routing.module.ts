import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SessionComponent } from './session/session.component';

const routes: Routes = [ 
    {path : '', redirectTo: 'landing-page', pathMatch : 'full'},
    {path: 'landing-page', component : LandingPageComponent},
    {path: 'session', component : SessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
