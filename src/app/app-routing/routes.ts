import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { OfertasComponent } from '../ofertas/ofertas.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'ofertas',     component: OfertasComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];