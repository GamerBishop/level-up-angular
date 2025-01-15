import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Profile } from '../interfaces/Profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  public profile = signal<Profile | null>(null);

  constructor() {


    const profile = localStorage.getItem('profile')
    if (profile) this.profile.set(JSON.parse(profile))

    effect(() => {
      const profile = this.profile()
      localStorage.setItem('profile', JSON.stringify(profile))
    })

    console.log(this.profile())
  }

  signIn(username: string): Observable<Profile | null> {
    return this.http
      .get<Profile[]>('http://localhost:3000/profiles?limit=1&username=' + username)
      .pipe(
        map(res => {
          if (!res.length) return null
          this.profile.set(res[0])

          return res[0]
        })
      )

  }

}
