import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-2xlyhzwr7rpiwjnn.us.auth0.com',         // e.g., dev-abc123.us.auth0.com
      clientId: 'XglzcYWXZeYpmAtokfjlg2KNffgLc08h',
      authorizationParams: {
        redirect_uri: 'https://rmfaizal.github.io/okta-auth',
      },
    }),
  ],
});
