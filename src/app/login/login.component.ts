import { Component } from '@angular/core';
import { AuthService } from '../services/auth.ts.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, BrowserModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService
    .login(this.email, this.password)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  }

  register() {
    this.authService
    .register(this.email, this.password)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  }

  logout() {
    this.authService
    .logout()
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  }
}
