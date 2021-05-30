import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

export class user {
  
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(firstName: string, lastName: string, email: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /** Attribute of service. */
  private baseURL = 'http://localhost:8080/AntiCOVID/rest/';

  /**
   * Constructor of service.
   * @param http to communicate with the backend.
   */
  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status >= 400) {
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
      
    } else {
      return 'o';
    }
  }
  
  /**
   * Send a new user to backend.
   */
  public addUser(firstName: string, lastName: string, email: string, password: string) {
    const headers = {'content-type': 'application/json'}  
    const body = JSON.stringify(new user(firstName, lastName, email, password));
    return this.http.post(this.baseURL + 'add_user', body ,{'headers': headers}).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Send an update request of user to backend
   * @param user we want to update
   * @returns the response from backend
   */
  public updateUser(user : any) {
    const headers = {'content-type': 'application/json'}  
    const body = JSON.stringify(user);
    return this.http.put(this.baseURL + 'update_user', body ,{'headers': headers}).pipe(
      catchError(this.handleError)
    );
  }

}
