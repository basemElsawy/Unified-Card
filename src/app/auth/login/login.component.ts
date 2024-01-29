import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  lang: string = 'en';
  loginForm!: FormGroup<any>;
  constructor(private router: Router) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  submitForm() {
    console.log(this.loginForm.value);
  }
  navigate() {
    this.router.navigate(['/signup']);
  }
}
