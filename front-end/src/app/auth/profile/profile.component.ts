import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService} from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  title = 'Profile';
  userForm: FormGroup;
  hide = true;
  notEditing = true;
  message:string;
  subscription: Subscription;

  constructor(private data: DataService) {
    console.log(this.message);
  }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message);
    this.userForm = new FormGroup({
      firstName: new FormControl({value : 'Hamza', disabled: this.notEditing}, [Validators.required]),
      lastName: new FormControl({value : 'Mouddene', disabled: this.notEditing}, [Validators.required]),
      email: new FormControl({value : 'hz.mouddene@gmail.com', disabled: true}, [Validators.required, Validators.email]),
      password: new FormControl({value : '12345678', disabled: true}, [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')])
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
    this.ngOnInit();
  }

}
