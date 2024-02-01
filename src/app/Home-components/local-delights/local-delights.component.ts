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
  selector: 'app-local-delights',
  templateUrl: './local-delights.component.html',
  styleUrls: ['./local-delights.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class LocalDelightsComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.initSearchForm();
  }

  initSearchForm() {
    this.searchForm = new FormGroup({
      searchOptions: new FormControl<string>(''),
    });
  }
}
