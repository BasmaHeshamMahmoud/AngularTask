import { IUser } from './../Shared Classes and types/interfaces';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}
  _url: string = 'https://jsonplaceholder.typicode.com/users';
  listUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url).pipe(
      catchError((err) => {
        return throwError(() => {
          return err.message || 'Server Error...';
        });
      })
    );
  }
}
