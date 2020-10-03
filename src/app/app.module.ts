import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Import angular fire*/ 
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionComponent } from './session/session.component';

import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { LoginComponent } from './login/login.component';

import { firebaseConfig } from '../environments/firebaseconfig';
import { SocialComponent } from './social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    HeaderComponent,
    FormComponent,
    MainmenuComponent,
    LoginComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
