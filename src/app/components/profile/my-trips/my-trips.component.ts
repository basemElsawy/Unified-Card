import { Component } from '@angular/core';

@Component({
  selector: 'app-my-trips',
  standalone: true,
  imports: [],
  templateUrl: './my-trips.component.html',
  styleUrl: './my-trips.component.css',
})
export class MyTripsComponent {
  myTrips: { id: number; date: string; trips: string; icon: string }[] = [
    {
      id: 1,
      date: 'This Week',
      trips: '20 Trips',
      icon: 'fa-solid fa-location-dot',
    },
    {
      id: 2,
      date: 'This Month',
      trips: '74 Trips',
      icon: 'fa-solid fa-location-dot',
    },
    {
      id: 1,
      date: 'This Quarter',
      trips: '130 Trips',
      icon: 'fa-solid fa-location-dot',
    },
  ];
}
