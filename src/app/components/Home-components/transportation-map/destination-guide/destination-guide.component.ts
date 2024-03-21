import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { GoogleMapsModule, MapInfoWindow } from '@angular/google-maps';
import { GoogleMapServiceService } from '../../../../services/google-map-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-destination-guide',
  templateUrl: './destination-guide.component.html',
  styleUrls: ['./destination-guide.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterLink, InputTextModule, GoogleMapsModule, FormsModule],
})
export class DestinationGuideComponent implements OnInit {
  activePlan1: boolean = false;
  activePlan2: boolean = false;
  activePlan3: boolean = false;
  activePlan4: boolean = false;
  destinationForm!: FormGroup;
  origin!: google.maps.LatLngLiteral;
  destination!: google.maps.LatLngLiteral;
  latitude!: number;
  longitude!: number;
  zoom = 12;
  map!: google.maps.Map;
  center!: google.maps.LatLngLiteral;
  address!: string;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,

  };
  inationForm!: FormGroup;
  @ViewChild('autocompleteSearchInput') autocompleteSearchInput!: ElementRef;
  @ViewChild('map', { static: false }) mapElement: any;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  constructor(public googleService: GoogleMapServiceService, private http: HttpClient
  ) { }

  ngOnInit() {
    // this.googleService.getCuurentPosition();
    this.googleService.watchPosition();
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.center = {
        lat: this.latitude,
        lng: this.longitude
      };
      this.getAddress(this.latitude, this.longitude);
      this.origin = this.center;

    });
    this.directionsRenderer.setMap(this.map);
    this.destinationForm = new FormGroup({
      current: new FormControl(null),
      destination: new FormControl(null),
    });
  }

  onInputChange(event: any) {
    const inputElement = this.autocompleteSearchInput.nativeElement as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(inputElement);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        this.destination = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        if (!this.destination) {
          return; // Prevent calculation if destination is not set
        }
        this.drawRoute();
      }

    });
  }
  getAddress(latitude: number, longitude: number) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyC63NJQEQn6FQtSWLeCVqFEQSlG2SyFyFw`;
    this.http.get<any>(url).subscribe(
      (response) => {
        if (response.status === 'OK') {
          this.address = response.results[0].formatted_address;
        } else {
          this.address = 'Address not found';
        }
      },
      (error) => {
        console.error('Error fetching address:', error);
        this.address = 'Error fetching address';
      }
    );
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
  drawRoute() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 7,
        center: {
          lat: this.center?.lat,
          lng: this.center?.lng,
        },
      }
    );
    directionsRenderer.setMap(map);
    directionsService.route(
      {
        origin: `${this.center?.lat},${this.center?.lng}`,
        destination: `${this.destination?.lat},${this.destination?.lng}`,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      },
      (response: any, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
          console.table('here is the response', response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
  }

  // calculateAndDisplayRoute(
  //   directionsService: google.maps.DirectionsService,
  //   directionsRenderer: google.maps.DirectionsRenderer
  // ) {
  //   debugger
  //   const map = new google.maps.Map(
  //     document.getElementById('map') as HTMLElement,
  //     {
  //       zoom: 7,
  //       // center: { lat: 41.85, lng: -87.65 },
  //     }
  //   );
  //   directionsRenderer.setMap(map);

  //   directionsService
  //     .route({
  //       origin: `${this.center?.lat},${this.center?.lng}`,
  //       destination: `${this.destination?.lat},${this.destination?.lng}`,
  //       travelMode: google.maps.TravelMode.DRIVING,
  //     })
  //     .then((response) => {
  //       directionsRenderer.setDirections(response);
  //       console.log(response)
  //     })
  //     .catch((e) => window.alert("Directions request failed due to " + status));
  // }


}
