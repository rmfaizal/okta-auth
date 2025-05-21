import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  template: `
    <h2>Dashboard (Protected)</h2>
    <p *ngIf="auth.user$ | async as user">
      Welcome, {{ user.name }} ({{ user.email }})
    </p>
    <button (click)="logout()">Logout</button>
  `,
})
export class DashboardComponent {
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
