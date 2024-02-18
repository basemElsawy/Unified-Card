import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import {
  GoogleMapsModule,
  MapInfoWindow,
  MapMarker,
} from '@angular/google-maps';
declare const L: any;
@Component({
  standalone: true,
  selector: 'app-destination-guide',
  templateUrl: './destination-guide.component.html',
  styleUrls: ['./destination-guide.component.css'],
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, GoogleMapsModule],
})
export class DestinationGuideComponent implements OnInit {
  activePlan1: boolean = false;
  activePlan2: boolean = false;
  activePlan3: boolean = false;
  activePlan4: boolean = false;
  destinationForm!: FormGroup;

  viewDetailFlag: boolean = false;
  showLocation: boolean = false;
  display: any;
  coords: any;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  constructor() {}

  ngOnInit() {
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
  changeStatus(planeNumber: number) {
    if (planeNumber === 1) {
      this.activePlan1 = true;
      this.activePlan2 = this.activePlan3 = this.activePlan4 = false;
    } else if (planeNumber === 2) {
      this.activePlan2 = true;
      this.activePlan1 = this.activePlan3 = this.activePlan4 = false;
    } else if (planeNumber === 3) {
      this.activePlan3 = true;
      this.activePlan2 = this.activePlan1 = this.activePlan4 = false;
    } else if (planeNumber === 4) {
      this.activePlan4 = true;
      this.activePlan2 = this.activePlan3 = this.activePlan1 = false;
    }
  }

  initDestinationForm() {
    this.destinationForm = new FormGroup({
      current: new FormControl(null),
      destination: new FormControl(null),
    });
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
}
