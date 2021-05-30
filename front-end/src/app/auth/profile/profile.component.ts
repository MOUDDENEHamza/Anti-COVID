import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FailedEditProfileComponent } from '../failed-edit-profile/failed-edit-profile.component';
import { SuccessDeleteAccountComponent } from '../success-delete-account/success-delete-account.component';
import { SuccessEditProfileComponent } from '../success-edit-profile/success-edit-profile.component';
import { UserService } from '../user.service';

export class User {
  
  id : number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(id : number, firstName: string, lastName: string, email: string, password: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Profile';
  userForm: FormGroup;
  hide = true;
  notEditing = true;
  user : any;
  ok : boolean;

  constructor(private http: HttpClient,
              private route : ActivatedRoute,
              private userService : UserService,
              public dialog: MatDialog,
              private router : Router) {
    this.user = JSON.parse((this.route.snapshot.paramMap.get('data')));
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(
        {value : this.user.firstName, disabled: this.notEditing},
        [Validators.required]
      ),
      lastName: new FormControl(
        {value : this.user.lastName, disabled: this.notEditing},
        [Validators.required]
      ),
      email: new FormControl(
        {value : this.user.email, disabled: this.notEditing},
        [Validators.required, Validators.email]
      ),
      password: new FormControl(
        {value : this.user.password, disabled: this.notEditing}, 
        [
          Validators.required,
          Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')
        ])
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

  enable () : boolean {
    return this.notEditing;
  }

  onEdit () : void {
    this.notEditing = !this.notEditing;
    this.ngOnInit();
  }

  onSave () : void {
    this.notEditing = !this.notEditing;
    console.log(this.userForm.get('password').value);
    this.user = new User(this.user.id, this.userForm.get('firstName').value, this.userForm.get('lastName').value,
    this.userForm.get('email').value, this.userForm.get('password').value);
    this.userService.updateUser(this.user).subscribe(
      data => {
        this.dialog.open(SuccessEditProfileComponent);
      },
      error => {
        this.dialog.open(FailedEditProfileComponent);
      }
    );
    this.ngOnInit();
  }

  onLogOut() : void {
    this.router.navigateByUrl('auth/sign-in');
  }

  onDelete() : void {
    this.http.get('http://localhost:8080/AntiCOVID/rest/delete_user/id=' + this.user.id,{ responseType: "json" }).subscribe(
      data => {
      },
      error => {
      }
    );
    this.dialog.open(SuccessDeleteAccountComponent);
    this.router.navigateByUrl('auth/sign-in');
  }

}
