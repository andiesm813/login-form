import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginTravelAppComponent } from './login-travel-app/login-travel-app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login-form', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'login-form', component: LoginFormComponent, data: { text: 'Login-Form' } },
  { path: 'login-page', component: LoginPageComponent, data: { text: 'Login-Page' } },
  { path: 'login-travel-app', component: LoginTravelAppComponent, data: { text: 'Login-Travel-App' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
