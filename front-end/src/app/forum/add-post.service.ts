import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class post {
  
  author: string;
  date: string;
  title: string;
  content: string;
  comments : comment[];

  constructor(author: string, date: string, title: string, content: string, comments : comment[]) {
    this.author = author;
    this.date = date;
    this.title = title;
    this.content = content;
    this.comments = comments;
  }

}

export class comment {
  
  author: string;
  date: string;
  content: string;

  constructor(author: string, date: string, content: string) {
    this.author = author;
    this.date = date;
    this.content = content;
  }

}

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  /** Attribute of service. */
  private baseURL = 'http://localhost:8080/AntiCOVID/rest/';

  /**
   * Constructor of service.
   * @param http to communicate with the backend.
   */
  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  
  public addPost(author: string, date: string, title: string, content: string) {
    const headers = {'content-type': 'application/json'}  
    const body = JSON.stringify(new post(author, date, title, content, []));
    return this.http.post(this.baseURL + 'add_post', body ,{'headers': headers}).pipe(
      catchError(this.handleError)
    );
  }

  public addComment(postId : number, author: string, date: string, content: string) {
    const headers = {'content-type': 'application/json'}  
    const body = JSON.stringify(new comment(author, date, content));
    return this.http.put(this.baseURL + 'post_id=' + postId +'/add_comment', body ,{'headers': headers}).pipe(
      catchError(this.handleError)
    );
  }

}
