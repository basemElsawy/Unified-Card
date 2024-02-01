import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RetrievePasswordComponent } from './auth/login/retrieve-password/retrieve-password.component';

import { LocalDelightsComponent } from './Home-components/local-delights/local-delights.component';
import { TransportationMapComponent } from './Home-components/transportation-map/tansportation-map.component';

import { HomeComponent } from './components/home/home.component';
import { LocalDelightsServicesComponent } from './Home-components/local-delights/local-delights-services/local-delights-services.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'retrieve',
    component: RetrievePasswordComponent,
  },

  {
    path: 'signup',
    component: SignupComponent,
  },

  { path: 'local-delights', component: LocalDelightsComponent },
  { path: 'tansportation-map', component: TransportationMapComponent },
  {
    path: 'local-delights-services',
    component: LocalDelightsServicesComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
