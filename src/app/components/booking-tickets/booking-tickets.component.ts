import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-tickets',
  standalone: true,
  imports: [],
  templateUrl: './booking-tickets.component.html',
  styleUrl: './booking-tickets.component.css'
})
export class BookingTicketsComponent {
  allData: { title: string, image: string, route: string }[] = [
    {
      title: 'Bus',
      image: '../../../assets/bus.png',
      route: 'busTicket'
    },
    {
      title: 'Subway',
      image: '../../../assets/subway.png',
      route: 'busTicket'
    },

    {
      title: 'Train',
      image: '../../../assets/train.png',
      route: 'busTicket'
    },
    {
      title: 'BRT',
      image: '../../../assets/subway.png',
      route: 'busTicket'

    },
    {
      title: 'LRT',
      image: '../../../assets/LRT.png',
      route: 'busTicket'
    },
    {
      title: 'Mono rail',
      image: '../../../assets/monorail.png',
      route: 'busTicket'
    },
    {
      title: 'Multi Mode',
      image: '../../../assets/LRT.png',
      route: 'busTicket'

    },


  ]
}
