import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
  planForm!: FormGroup;
  constructor(private router: Router) {}

  ngOnInit() {
    this.initPlanForm();
  }

  initPlanForm() {
    this.planForm = new FormGroup({
      currentLocation: new FormControl(null),
      destination: new FormControl(null),
    });
  }

  gotToDestinationPlans() {
    this.router.navigate(['/destination-guide']);
  }
}
