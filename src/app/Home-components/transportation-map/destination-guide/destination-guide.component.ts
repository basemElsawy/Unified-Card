import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone: true,
  selector: 'app-destination-guide',
  templateUrl: './destination-guide.component.html',
  styleUrls: ['./destination-guide.component.css'],
  imports: [ReactiveFormsModule, RouterLink, InputTextModule],
})
export class DestinationGuideComponent implements OnInit {
  activePlan1: boolean = false;
  activePlan2: boolean = false;
  activePlan3: boolean = false;
  activePlan4: boolean = false;
  destinationForm!: FormGroup;
  constructor() {}

  ngOnInit() {}
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
}
