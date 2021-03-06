import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { FailedSignInComponent } from './failed-sign-in/failed-sign-in.component';
import { FailedSignUpComponent } from './failed-sign-up/failed-sign-up.component';
import { SuccessSignUpComponent } from './success-sign-up/success-sign-up.component';
import { FailedEditProfileComponent } from './failed-edit-profile/failed-edit-profile.component';
import { SuccessEditProfileComponent } from './success-edit-profile/success-edit-profile.component';
import { SuccessDeleteAccountComponent } from './success-delete-account/success-delete-account.component';


@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    FailedSignInComponent,
    FailedSignUpComponent,
    SuccessSignUpComponent,
    FailedEditProfileComponent,
    SuccessEditProfileComponent,
    SuccessDeleteAccountComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
  ]
})
export class AuthModule { }
