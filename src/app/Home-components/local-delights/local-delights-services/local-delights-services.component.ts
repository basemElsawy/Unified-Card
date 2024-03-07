import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule, MapInfoWindow } from '@angular/google-maps';
import { Router, RouterLink } from '@angular/router';
import { GoogleMapServiceService } from '../../../services/google-map-service.service';
@Component({
  selector: 'app-local-delights-services',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, GoogleMapsModule],
  templateUrl: './local-delights-services.component.html',
  styleUrl: './local-delights-services.component.css',
})
export class LocalDelightsServicesComponent implements OnInit {
  lang: string = 'en';
  viewDetailFlag: boolean = false;
  showLocation: boolean = false;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  constructor(
    private router: Router,
    public googleService: GoogleMapServiceService
  ) {}

  ngOnInit(): void {
    // this.googleService.getCuurentPosition();
    // this.googleService.watchPosition();
  }

  // this fn to show map of ur choosen resturant
  showMap() {
    this.showLocation = true;
  }
}
