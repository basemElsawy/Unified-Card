import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeBannerComponent } from '../home-banner/home-banner.component';
import { BookingTicketsComponent } from '../booking-tickets/booking-tickets.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HomeBannerComponent, BookingTicketsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
