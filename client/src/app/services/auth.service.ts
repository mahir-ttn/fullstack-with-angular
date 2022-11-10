import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  register(fullname: string, email: string, password: string): Observable<any> {
    return this.httpClient.post(
      `${environment.apiUrl}/auth/register`,
      {
        fullname,
        email,
        password,
      },
      httpOptions
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(
      `${environment.apiUrl}/auth/login`,
      {
        email,
        password,
      },
      httpOptions
    );
  }

  getMe(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/user/me`, httpOptions);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
