import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-local-delights-services',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './local-delights-services.component.html',
  styleUrl: './local-delights-services.component.css',
})
export class LocalDelightsServicesComponent implements OnInit {
  lang: string = 'en';

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
