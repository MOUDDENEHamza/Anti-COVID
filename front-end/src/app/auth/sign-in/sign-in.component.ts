import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService} from '../data.service';
import { FailedSignInComponent } from '../failed-sign-in/failed-sign-in.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  title = 'Sign in';
  userForm: FormGroup;
  hide = true;
  message:string;
  subscription: Subscription;

  constructor(private http: HttpClient,
              private router : Router,
              public dialog: MatDialog,
              private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Get error message if an input is invalid
   */
   getErrorMessage(item : string) : string {
    if (this.userForm.get(item).hasError('required')) {
      return 'You should fill this field.';
    } else if (item === 'email' && this.userForm.get(item).hasError('email')) {
      return 'Not a valid email';
    }
  }

  enable() : boolean {
    return this.userForm.invalid;;
  }

  onSubmit() : void {
    this.http.get('http://localhost:8080/AntiCOVID/rest/get_user_by_email/email=' + this.userForm.get('email').value +
    '&password=' + this.userForm.get('password').value,{ responseType: "json" }).subscribe(
      data => {
        this.data.changeMessage(this.userForm.get('email').value);
        this.ngOnInit();
        this.router.navigateByUrl('auth/profile');
      },
      error => {
        if (error.status >= 400) {
          this.dialog.open(FailedSignInComponent);
          this.ngOnInit();
        }
      }
    );
  }

  onCreate() : void {
    this.router.navigateByUrl('auth/sign-up');
  }

}
