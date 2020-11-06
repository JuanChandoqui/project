import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Importacion de los componentes*/
import { SessionComponent } from './session/session.component';
import {MainmenuComponent} from './mainmenu/mainmenu.component';
import {FormComponent} from './form/form.component';
import { LoginComponent } from './login/login.component';
import { SocialComponent } from './social/social.component';
import { NavTopComponent } from './nav-top/nav-top.component'; 
import { TopMusicComponent } from './top-music/top-music.component';

const routes: Routes = [ 
    {path: '',redirectTo: 'login', pathMatch : 'full'},
    {path: 'session', component : SessionComponent},
    {path: 'mainmenu', component : MainmenuComponent},
    {path: 'form', component: FormComponent},
    {path: 'login', component: LoginComponent},
    {path: 'social', component: SocialComponent},
    {path: 'nav-top', component: NavTopComponent},
    {path: 'top-music', component: TopMusicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
