import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-retrieve-password',
  standalone: true,
  imports: [ReactiveFormsModule],

  templateUrl: './retrieve-password.component.html',
  styleUrl: './retrieve-password.component.css',
})
export class RetrievePasswordComponent {
  forgotPasswordForm!: FormGroup;

  constructor() {}
  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, Validators.required),
    });
  }
}
