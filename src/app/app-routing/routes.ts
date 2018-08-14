import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { OfertasComponent } from '../ofertas/ofertas.component';
import { Auth } from '../auth/auth'
import { LoginComponent } from '../login/login.component'
import { Login2Component } from '../login2/login2.component'

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'ofertas',  component: OfertasComponent,canActivate: [Auth] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];