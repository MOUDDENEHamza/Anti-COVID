import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPostService } from './add-post.service';
import { MatAccordion } from '@angular/material/expansion';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  title = 'Forum';
  postForm: FormGroup;
  posts: any = [];
  likeColor = "";
  @ViewChild(MatAccordion) accordion: MatAccordion;
  open = false;

  constructor(private addPostService: AddPostService, private http: HttpClient, public dialog: MatDialog) {
    this.http.get('http://localhost:8080/AntiCOVID/rest/get_posts_list', { responseType: "json" }).subscribe(
      data => {
        this.posts = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit () : void {
    this.postForm = new FormGroup({
      author: new FormControl('Hamza Mouddene', [Validators.required]),
      date: new FormControl('May 26, 2021', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }

  getErrorMessage() {
    if (this.postForm.get('title').hasError('required')
      || this.postForm.get('content').hasError('required')) {
      return 'You should fill this field.';
    }
  }

  onPost () : void {
    this.addPostService.addPost(this.postForm.get('author').value,
    this.postForm.get('date').value, this.postForm.get('title').value, this.postForm.get('content').value).subscribe();
    location.reload();
  }

  onLike () : void {
    if (this.likeColor === '') {
      this.likeColor = 'primary';
    } else {
      this.likeColor = '';
    }
  }

  onComment (post) : void {
    this.dialog.open(CommentComponent, {data: post});
  }

}
