import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './login';

import { Auth } from './auth/auth';
import { AlertService, AuthenticationService, UserService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OfertasComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [        Auth,
    AlertService,
    AuthenticationService,
    UserService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
