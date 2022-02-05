import { IPost } from './../Shared Classes and types/interfaces';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostServicesService {
  constructor(private http: HttpClient) {}
  _url: string = 'https://jsonplaceholder.typicode.com/posts';
  listPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this._url).pipe(
      catchError((err) => {
        return throwError(() => {
          err.message || 'Server Error...';
        });
      })
    );
  }
}
