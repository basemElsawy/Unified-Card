import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RetrievePasswordComponent } from './auth/login/retrieve-password/retrieve-password.component';
<<<<<<< HEAD
import { LocalDelightsComponent } from './Home-components/local-delights/local-delights.component';
import { TransportationMapComponent } from './Home-components/transportation-map/tansportation-map.component';
=======
import { HomeComponent } from './components/home/home.component';
>>>>>>> 0da594a (create home page component)
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
<<<<<<< HEAD

  { path: 'local-delights', component: LocalDelightsComponent },
  { path: 'tansportation-map', component: TransportationMapComponent },
=======
  {
    path: '',
    component: HomeComponent,
  },
>>>>>>> 0da594a (create home page component)
];
