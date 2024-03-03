import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RetrievePasswordComponent } from './auth/login/retrieve-password/retrieve-password.component';
import { PersonalProfileComponent } from './components/profile/personal-profile.component';

import { HomeComponent } from './components/home/home.component';
import { BookingProcessComponent } from './components/booking-process/booking-process.component';
import { LocalDelightsServicesComponent } from './Home-components/local-delights/local-delights-services/local-delights-services.component';
import { LocalDelightsComponent } from './Home-components/local-delights/local-delights.component';
import { DestinationGuideComponent } from './Home-components/transportation-map/destination-guide/destination-guide.component';
import { TransportationMapComponent } from './Home-components/transportation-map/tansportation-map.component';
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
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
  {
    path: 'local-delights-services',
    component: LocalDelightsServicesComponent,
  },
  { path: 'tansportation-map', component: TransportationMapComponent },

  { path: 'destination-guide', component: DestinationGuideComponent },
  {
    path: 'booking',
    component: BookingProcessComponent,
  },
  {
    path: 'profile',
    component: PersonalProfileComponent,
  },
];
