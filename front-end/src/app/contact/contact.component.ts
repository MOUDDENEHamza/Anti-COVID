import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /** Attributes of component. */
  title = 'Contact';
  contactForm: FormGroup;

  /**
   * Constructor of component.
   */
  constructor() { }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive to
   * initialize the form using in the component.
   */
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }

  /**
   * Get error message if an input is invalid
   */
   getErrorMessage() {
    if (this.contactForm.get('firstName').hasError('required')
      || this.contactForm.get('lastName').hasError('required')
      || this.contactForm.get('email').hasError('required')
      || this.contactForm.get('subject').hasError('required')
      || this.contactForm.get('content').hasError('required')) {
      return 'You should fill this field.';
    } else {
      return this.contactForm.get('email').hasError('email') ? 'Not a valid email' : '';
    }
  }

  /**
   * Enable send button when the form is valid
   */
   enable(): boolean {
    return this.contactForm.invalid;
  }

  /**
   * Send the form to administrator.
   */
  onSubmit() {
  }

}
