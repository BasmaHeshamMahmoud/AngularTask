import { LoginUser } from './../login-user';
import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  constructor(private http: HttpClient) {}
  _url: string = 'http://localhost:4000/enroll';

  enroll(user: User) {
    return this.http.post(this._url, user);
  }

  login(user: LoginUser) {
    return this.http.post(this._url, user);
  }
}
