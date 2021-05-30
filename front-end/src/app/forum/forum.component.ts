import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPostService } from './add-post.service';
import { MatAccordion } from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import { CommentComponent } from './comment/comment.component';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  title = 'Forum';
  postForm: FormGroup;
  posts: any = [];
  likesColor : string[] = [];
  @ViewChild(MatAccordion) accordion: MatAccordion;
  open = false;
  item : any;
  subscription : Subscription;
  todayISOString : string = new Date().toISOString();

  constructor(private addPostService: AddPostService,
              private http: HttpClient,
              public dialog: MatDialog,
              private data : DataService) {
      this.http.get('http://localhost:8080/AntiCOVID/rest/get_posts_list', { responseType: "json" }).subscribe(
      data => {
        this.posts = data;
        for (var i = 0; i < this.posts.length; i++) {
          this.likesColor.push('');
        }
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
    this.subscription = this.data.currentItem.subscribe(item => this.item = item);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

  getIndex (id : number) : number {
    for (var i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id === id) {
        return i;
      }
    }
  }

  onLike (index : number) : void {
    if (this.likesColor[index] === '') {
      this.likesColor[index] = 'primary';
    } else {
      this.likesColor[index] = '';
    }
  }

  onComment (post) : void {
    this.dialog.open(CommentComponent, {data: post}).afterClosed().subscribe(result => {
      location.reload();
    });
  }

}
