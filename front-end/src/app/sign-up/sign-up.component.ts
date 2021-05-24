import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateUserService } from './create-user.service';
import { CreatingDialogComponent } from './creating-dialog/creating-dialog.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  title = 'Sign up';
  userForm: FormGroup;
  hide = true;
  
  constructor(private createUserService : CreateUserService, public dialog: MatDialog, private router : Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  /**
   * Get error message if an input is invalid
   */
   getErrorMessage() {
    if (this.userForm.get('firstName').hasError('required')
      || this.userForm.get('lastName').hasError('required')
      || this.userForm.get('email').hasError('required')
      || this.userForm.get('password').hasError('required')) {
      return 'You should fill this field.';
    } else {
      return this.userForm.get('email').hasError('email') ? 'Not a valid email' : '';
    }
  }

  enable() : boolean {
    return this.userForm.invalid;
  }

  onSubmit() : void {
    this.createUserService.addUser(this.userForm.get('firstName').value,
    this.userForm.get('lastName').value, this.userForm.get('email').value,
    this.userForm.get('password').value).subscribe();
    this.dialog.open(CreatingDialogComponent);
    this.ngOnInit();
    this.router.navigateByUrl('/sign-in');
  }

}
