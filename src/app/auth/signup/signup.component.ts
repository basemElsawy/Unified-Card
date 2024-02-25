import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, RouterModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  lang: string = 'en';
  signupForm!: FormGroup<any>;
  constructor(private router: Router) {}
  ngOnInit() {
    this.signupForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      emailAddress: new FormControl('', Validators.required),
      identificationNumber: new FormControl('', Validators.required),
      fullName: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }
  submitForm() {}
  // navigate() {
  //   this.router.navigate(['/login', 'signin']);
  // }
}
