import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MyTripsComponent } from './my-trips/my-trips.component';
import { MyCardComponent } from './my-card/my-card.component';
import { BalanceComponent } from './balance/balance.component';
import { HistoryComponent } from './history/history.component';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-personal-profile',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MyTripsComponent,
    MyCardComponent,
    BalanceComponent,
    HistoryComponent,
  ],
  templateUrl: './personal-profile.component.html',
  styleUrl: './personal-profile.component.css',
})
export class PersonalProfileComponent {
  active!: string;
  activeSubject: BehaviorSubject<string> = new BehaviorSubject('My Trips');
  buttons: { id: number; link: string; isActive: boolean }[] = [
    {
      id: 1,
      link: 'My Trips',
      isActive: true,
    },
    {
      id: 2,
      link: 'My Card',
      isActive: false,
    },
    {
      id: 3,
      link: 'Balance',
      isActive: false,
    },
    {
      id: 4,
      link: 'History',
      isActive: false,
    },
  ];

  ngOnInit() {
    this.activeSubject.subscribe((link) => {
      this.active = link;
    });
  }
  changeStateButton(
    selectedButton: { id: number; link: string; isActive: boolean },
    state: string
  ) {
    this.activeSubject.next(state);
    selectedButton.isActive = true;
    for (let button of this.buttons) {
      if (button.id != selectedButton.id) {
        button.isActive = false;
      }
    }
  }
}
