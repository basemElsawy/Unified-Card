import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tansportation-map',
  templateUrl: './tansportation-map.component.html',
  styleUrls: ['./tansportation-map.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class TransportationMapComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
