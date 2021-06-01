import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  title = 'Sign in';
  userForm: FormGroup;
  hide = true;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  /**
   * Get error message if an input is invalid
   */
   getErrorMessage() {
    if (this.userForm.get('email').hasError('required')
      || this.userForm.get('password').hasError('required')) {
      return 'You should fill this field.';
    } else {
      return this.userForm.get('email').hasError('email') ? 'Not a valid email' : '';
    }
  }

  enable() : boolean {
    return this.userForm.invalid;;
  }

  onSubmit() : void {
    this.http.get('http://localhost:8080/AntiCOVID/rest/get_user_by_email', { responseType: "json" }).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.ngOnInit();
  }

}
