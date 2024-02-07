import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeBannerComponent } from '../home-banner/home-banner.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HomeBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
