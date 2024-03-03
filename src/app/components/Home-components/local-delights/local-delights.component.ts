import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-local-delights',
  templateUrl: './local-delights.component.html',
  styleUrls: ['./local-delights.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class LocalDelightsComponent implements OnInit {
  lang: string = 'en';
  searchForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initSearchForm();
  }

  // this fn to init a form for seaching
  initSearchForm(): void {
    this.searchForm = new FormGroup({
      searchOptions: new FormControl<string>(''),
    });
  }
  // this fn to navigate to selected service from search form
  goToSelectedService(): void {
    this.router.navigate(['/local-delights-services']);
  }
}
