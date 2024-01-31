import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RetrievePasswordComponent } from './auth/login/retrieve-password/retrieve-password.component';
import { PersonalProfileComponent } from './components/profile/personal-profile.component';
import { MyCardComponent } from './components/profile/my-card/my-card.component';
import { HistoryComponent } from './components/profile/history/history.component';
import { BalanceComponent } from './components/profile/balance/balance.component';
import { MyTripsComponent } from './components/profile/my-trips/my-trips.component';
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
