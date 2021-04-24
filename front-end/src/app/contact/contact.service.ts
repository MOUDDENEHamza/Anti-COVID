import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

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
  private baseURL = 'http://localhost:8080/rest/rest/';

  /**
   * Constructor of service.
   * @param http to communicate with the backend.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Send the form contact to administrator.
   */
  public sendEmail(firstName: string, lastName: string, email: string, subject: string, content: string) {
    const headers = {'content-type': 'application/json'}  
    const body=JSON.stringify(new contact(firstName, lastName, email, subject, content));
    console.log(body)
    return this.http.post(this.baseURL + 'contact', body ,{'headers': headers})
  }

}
