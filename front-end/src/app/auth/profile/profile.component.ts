import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';
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
export class ProfileComponent implements OnInit,OnDestroy {

  title = 'Profile';
  userForm: FormGroup;
  hide = true;
  notEditing = true;
  user : any;
  ok : boolean;
  subscription : Subscription;
  id : number;
  firstName : string;
  lastName : string;
  email : string;
  password : string;
  
  constructor(private http : HttpClient,
              private userService : UserService,
              public dialog : MatDialog,
              private router : Router,
              private data : DataService) {
    this.subscription = this.data.currentId.subscribe(id => this.id = id);
    this.data.changeMessage(this.id);
    this.http.get('http://localhost:8080/AntiCOVID/rest/get_user/id=' + this.id,
      { responseType: "json" }).subscribe(
      data => {
        this.firstName = JSON.parse(JSON.stringify(data)).firstName;
        this.lastName = JSON.parse(JSON.stringify(data)).lastName;
        this.email = JSON.parse(JSON.stringify(data)).email;
        this.password = JSON.parse(JSON.stringify(data)).password;
      },
      error => {
        this.router.navigateByUrl('auth/sign-in');
      }
    );
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(
        {value : this.firstName, disabled: this.notEditing},
        [Validators.required]
      ),
      lastName: new FormControl(
        {value : this.lastName, disabled: this.notEditing},
        [Validators.required]
      ),
      email: new FormControl(
        {value : this.email, disabled: this.notEditing},
        [Validators.required, Validators.email]
      ),
      password: new FormControl(
        {value : this.password, disabled: this.notEditing}, 
        [
          Validators.required,
          Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')
        ])
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
    this.user = new User(this.id, this.userForm.get('firstName').value, this.userForm.get('lastName').value,
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
