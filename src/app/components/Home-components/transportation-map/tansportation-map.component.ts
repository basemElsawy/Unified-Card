import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { GoogleMapServiceService } from '../../../services/google-map-service.service';
import { HttpClient } from '@angular/common/http';
// import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-tansportation-map',
  templateUrl: './tansportation-map.component.html',
  styleUrls: ['./tansportation-map.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  //TransportationMapComponent
})
export class TransportationMapComponent implements OnInit {
  destinationForm!: FormGroup;
  latitude!: number;
  longitude!: number;
  zoom = 12;
  map!: google.maps.Map;
  center!: google.maps.LatLngLiteral;
  address!: string;
  @ViewChild('autocompleteSearchInput') autocompleteSearchInput!: ElementRef;

  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,

  };
  constructor(private router: Router, public googleService: GoogleMapServiceService, private http: HttpClient) { }

  ngOnInit() {
    // this.googleService.getCuurentPosition();
    // this.googleService.watchPosition();
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.center = {
        lat: this.latitude,
        lng: this.longitude
      };
      this.getAddress(this.latitude, this.longitude);
    });
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
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
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

  gotToDestinationPlans() {
    this.router.navigate(['/destination-guide']);
  }
}
