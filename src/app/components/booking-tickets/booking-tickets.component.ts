import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking-tickets',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './booking-tickets.component.html',
  styleUrl: './booking-tickets.component.css'
})
export class BookingTicketsComponent {
  allData: { title: string, image: string, route: string }[] = [
    {
      title: 'Bus',
      image: '../../../assets/bus.png',
      route: 'booking'
    },
    {
      title: 'Subway',
      image: '../../../assets/subway.png',
      route: 'booking'
    },

    {
      title: 'Train',
      image: '../../../assets/train.png',
      route: 'booking'
    },
    {
      title: 'BRT',
      image: '../../../assets/subway.png',
      route: 'booking'

    },
    {
      title: 'LRT',
      image: '../../../assets/LRT.png',
      route: 'booking'
    },
    {
      title: 'Mono rail',
      image: '../../../assets/monorail.png',
      route: 'booking'
    },
    {
      title: 'Multi Mode',
      image: '../../../assets/LRT.png',
      route: 'booking'

    },


  ]
}
