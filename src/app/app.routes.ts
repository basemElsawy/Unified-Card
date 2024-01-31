import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RetrievePasswordComponent } from './auth/login/retrieve-password/retrieve-password.component';
import { PersonalProfileComponent } from './components/profile/personal-profile.component';
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

  {
    path: 'profile',
    component: PersonalProfileComponent,
  },
];
