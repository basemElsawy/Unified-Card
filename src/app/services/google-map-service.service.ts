import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapServiceService {
  display: any;
  constructor() {}

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
