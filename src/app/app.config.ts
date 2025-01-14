import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

/**
 * Configuration object for the Angular application.
 *
 * This configuration includes the following providers:
 * - `provideExperimentalZonelessChangeDetection()`: Enables experimental zoneless change detection for improved performance.
 * - `provideRouter(routes)`: Configures the application's router with the specified routes.
 * - `provideHttpClient()`: Provides the HttpClient service for making HTTP requests.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient() //
  ]
};
