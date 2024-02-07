import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  GoogleMapsModule,
  MapInfoWindow,
  MapMarker,
} from '@angular/google-maps';
import { Router, RouterLink } from '@angular/router';
declare const L: any;

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
  display: any;
  coords: any;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.coords = position.coords;
      console.log(
        `lat : ${position.coords.latitude}`,
        `long :${position.coords.longitude}`
      );
      var map = L.map('map').setView(
        [this.coords.latitude, this.coords.longitude],
        13
      );
    });

    this.watchPosition();
  }
  watchPosition() {
    let lat = 0;
    let long = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat : ${position.coords.latitude}`,
          `long :${position.coords.longitude}`
        );
        if (!(position.coords.latitude == lat)) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }

  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  showMap() {
    this.showLocation = true;
  }
}
