import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from './contact.service';
import { FailedSendingEmailComponent } from './failed-sending-email/failed-sending-email.component';
import { SuccessSendingEmailComponent } from './success-sending-email/success-sending-email.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /** Attributes of component. */
  title = 'Contact';
  contactForm: FormGroup;
  ContactService: any;

  /**
   * Constructor of component.
   */
  constructor(private contactService: ContactService,
              public dialog: MatDialog) { }

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
   getErrorMessage(item : string) : string {
    if (this.contactForm.get(item).hasError('required')) {
      return 'You should fill this field.';
    } else { 
      if (this.contactForm.get(item).hasError('email')) {
        return 'Not a valid email';
      }
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
    this.contactService.sendEmail(this.contactForm.get('firstName').value,
    this.contactForm.get('lastName').value, this.contactForm.get('email').value,
    this.contactForm.get('subject').value, this.contactForm.get('content').value).subscribe(
      data => {
        console.log(data);
        this.dialog.open(SuccessSendingEmailComponent);
      },
      error => {
        this.dialog.open(FailedSendingEmailComponent);
      }
    );
    this.ngOnInit();
  }

}