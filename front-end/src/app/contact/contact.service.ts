import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

export class contact {
  
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  content: string;

  constructor(firstName: string, lastName: string, email: string, subject: string, content: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.subject = subject;
    this.content = content;
  }

}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

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
  
  /**
   * Send the form contact to administrator.
   */
  public sendEmail(firstName: string, lastName: string, email: string, subject: string, content: string) {
    const headers = {'content-type': 'application/json'}  
    const body = JSON.stringify(new contact(firstName, lastName, email, subject, content));
    return this.http.post(this.baseURL + 'contact', body ,{'headers': headers}).pipe(
      catchError(this.handleError)
    );
  }

}
