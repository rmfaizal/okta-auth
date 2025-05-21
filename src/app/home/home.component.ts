import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe],
  template: `
    <h2>Welcome to Angular + Auth0 (Standalone)</h2>
    <button *ngIf="!(auth.isAuthenticated$ | async)" (click)="auth.loginWithRedirect()">Login</button>
    <button *ngIf="auth.isAuthenticated$ | async" (click)="logout()">Logout</button>
    <a routerLink="/dashboard">Go to Dashboard</a>
  `,
})
export class HomeComponent {
  returnTo = window.location.origin;

  constructor(public auth: AuthService) {}

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.returnTo,
      },
    });
  }
}
