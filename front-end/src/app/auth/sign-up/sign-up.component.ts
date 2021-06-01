import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FailedSignUpComponent } from '../failed-sign-up/failed-sign-up.component';
import { SuccessSignUpComponent } from '../success-sign-up/success-sign-up.component';
import { UserService } from '../user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  title = 'Sign up';
  userForm: FormGroup;
  hide = true;
  
  constructor(private userService : UserService,
              public dialog: MatDialog,
              private router : Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  /**
   * Get error message if an input is invalid
   */
   getErrorMessage(item : string) : string {
    if (this.userForm.get(item).hasError('required')) {
      return 'You should fill this field.';
    } else if (item === 'password' && this.userForm.get('password').hasError('pattern')) {
      return 'The password should contains an one uppercase letter and one digit at least.';
    } else if (item === 'email' && this.userForm.get('email').hasError('email')) {
      return 'Not a valid email';
    }
  }

  enable() : boolean {
    return this.userForm.invalid;
  }

  onSubmit() : void {
    if (this.userForm.get('password').value === this.userForm.get('confirmPassword').value) {
      this.userService.addUser(this.userForm.get('firstName').value,
      this.userForm.get('lastName').value, this.userForm.get('email').value,
      this.userForm.get('password').value).subscribe(
        data => {
          this.dialog.open(SuccessSignUpComponent);
          this.ngOnInit();
          this.router.navigateByUrl('auth/sign-in');
        },
        error => {
          this.dialog.open(FailedSignUpComponent);
          this.ngOnInit();
        }
      );
    } else {
      this.ngOnInit();
      this._snackBar.open("Error while confirming password", "cancel");
    }
  }

}
