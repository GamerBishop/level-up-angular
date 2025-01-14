import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Profile } from '../interface/profile.interface'; // Adjust the path as necessary
import { map, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  public profile = signal<Profile | null>(null);

  constructor() {
    const profile = localStorage.getItem('userProfile');
    if(profile) this.profile.set(JSON.parse(profile));

    effect(() => {
      const profile = this.profile();
        localStorage.setItem('userProfile', JSON.stringify(profile));
        console.log('Profile updated:', profile);
    });
  }

  signIn(username: string): Observable<Profile | null>{
    console.log('Signing in as', username);
    return this.http
      .get<Profile[]>(
        'http://localhost:3000/profiles?limit=1&username=' + username
      )
      .pipe(
        map((res) => {
          if (!res.length) return null;
          console.log('Signed in as', res[0]);
          this.profile.set(res[0]);
          return res[0];
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Error signing in', error);
          return throwError(() => new Error(error.message));
        })
      );
  }
}
