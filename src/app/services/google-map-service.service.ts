import { Injectable, ViewChild } from '@angular/core';
// import { MapInfoWindow } from '@angular/google-maps';
declare const L: any;
@Injectable({
  providedIn: 'root',
})
export class GoogleMapServiceService {
  display: any;
  coords: any;
  // center: google.maps.LatLngLiteral = {
  //   lat: 24,
  //   lng: 12,
  // };
  zoom = 4;
  constructor() {}

  // this fn to get ur currnet location from ur device
  // getCuurentPosition() {
  //   if (!navigator.geolocation) {
  //     console.log('location is not supported');
  //   }
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     this.coords = position.coords;
  //     console.log(
  //       `lat : ${position.coords.latitude}`,
  //       `long :${position.coords.longitude}`
  //     );
  //     var map = this.L.map('map').setView(
  //       [this.coords.latitude, this.coords.longitude],
  //       13
  //     );
  //   });
  // }

  // this fn to get ur current location on every change
  // watchPosition() {
  //   let lat = 0;
  //   let long = 0;
  //   let id = navigator.geolocation.watchPosition(
  //     (position) => {
  //       console.log(
  //         `lat : ${position.coords.latitude}`,
  //         `long :${position.coords.longitude}`
  //       );
  //       if (!(position.coords.latitude == lat)) {
  //         navigator.geolocation.clearWatch(id);
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     },
  //     { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  //   );
  // }

  // moveMap(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) this.center = event.latLng.toJSON();
  // }
  // move(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) this.display = event.latLng.toJSON();
  // }
}
