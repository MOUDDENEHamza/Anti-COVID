import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  /** Attribute of service. */
  private baseUrl = 'rest/';

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
    const formData: FormData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('content', content);

    const req = new HttpRequest('POST', `${this.baseUrl}/contacts`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

}
