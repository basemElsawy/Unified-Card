import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RetrievePasswordComponent } from './auth/login/retrieve-password/retrieve-password.component';
import { PersonalProfileComponent } from './components/profile/personal-profile.component';
import { HomeComponent } from './components/home/home.component';
import { BookingProcessComponent } from './components/booking-process/booking-process.component';
import { LocalDelightsServicesComponent } from '../app/components/Home-components/local-delights/local-delights-services/local-delights-services.component';
import { DestinationGuideComponent } from '../app/components/Home-components/transportation-map/destination-guide/destination-guide.component';
import { LocalDelightsComponent } from './components/Home-components/local-delights/local-delights.component';
import { TransportationMapComponent } from './components/Home-components/transportation-map/tansportation-map.component';
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

  {
    path: 'local-delights-services',
    component: LocalDelightsServicesComponent,
  },
  {
    path: 'local-delights',
    component: LocalDelightsComponent,
  },

  { path: 'transportation-map', component: TransportationMapComponent },
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
