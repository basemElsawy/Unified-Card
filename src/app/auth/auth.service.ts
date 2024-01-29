import { Injectable } from '@angular/core';
import { HttpService } from '../http-service.service';
import { User } from './Models/userModel';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private HttpService: HttpService) {}

  login(): void {
    this.HttpService.PostMethod('/example-api.com', '').subscribe({
      next: (response: User) => {},
      error: () => {},
      complete: () => {},
    });
  }
}
