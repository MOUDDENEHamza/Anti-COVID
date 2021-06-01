import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddPostService } from '../add-post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  commentForm: FormGroup;
  post : any;

  constructor(private addPostService: AddPostService, @Inject(MAT_DIALOG_DATA) data) {
    this.post = data;
  }

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      author: new FormControl('Hamza Mouddene', [Validators.required]),
      date: new FormControl('May 26, 2021', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }

  getErrorMessage() {
    if (this.commentForm.get('content').hasError('required')) {
      return 'You should fill this field.';
    }
  }

  onPost () : void {
    this.addPostService.addComment(this.post.id, this.commentForm.get('author').value,
    this.commentForm.get('date').value, this.commentForm.get('content').value).subscribe();
  }

}
