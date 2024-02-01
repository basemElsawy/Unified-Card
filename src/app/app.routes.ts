import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RetrievePasswordComponent } from './auth/login/retrieve-password/retrieve-password.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { LocalDelightsComponent } from './Home-components/local-delights/local-delights.component';
import { TransportationMapComponent } from './Home-components/transportation-map/tansportation-map.component';
=======
import { HomeComponent } from './components/home/home.component';
>>>>>>> 0da594a (create home page component)
=======
import { HomeComponent } from './components/home/home.component';
>>>>>>> 0da594a8e9c9fcc6d8beab3e22ae1c3e88d8fe81
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
<<<<<<< HEAD

  { path: 'local-delights', component: LocalDelightsComponent },
  { path: 'tansportation-map', component: TransportationMapComponent },
=======
=======
>>>>>>> 0da594a8e9c9fcc6d8beab3e22ae1c3e88d8fe81
  {
    path: '',
    component: HomeComponent,
  },
<<<<<<< HEAD
>>>>>>> 0da594a (create home page component)
=======
>>>>>>> 0da594a8e9c9fcc6d8beab3e22ae1c3e88d8fe81
];
