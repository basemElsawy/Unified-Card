import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeBannerComponent } from '../home-banner/home-banner.component';
import { BookingTicketsComponent } from '../booking-tickets/booking-tickets.component';
import { LocalDelightsComponent } from '../Home-components/local-delights/local-delights.component';
import { TransportationMapComponent } from '../Home-components/transportation-map/tansportation-map.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeBannerComponent,
    BookingTicketsComponent,
    LocalDelightsComponent,
    TransportationMapComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
