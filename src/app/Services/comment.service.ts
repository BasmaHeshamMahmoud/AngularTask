import { IComment } from './../Shared Classes and types/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}
  _url: string = 'https://jsonplaceholder.typicode.com/comments';
  listComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this._url).pipe(
      catchError((err) => {
        return throwError(() => {
          err.message || 'Server Erorr...';
        });
      })
    );
  }
}
