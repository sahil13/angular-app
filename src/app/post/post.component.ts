import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../common/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts;
  filteredPost;

  flg = false;

  postForm = new FormGroup({
    title: new FormControl('', [Validators.required])
  });

  cols = [
    { field: 'id', header: 'ID', width: '70', sort: true },
    { field: 'title', header: 'Title', width: '120' },
    { field: 'body', header: 'Body', width: '120' },
    { field: 'like', header: 'Like', width: '80', sort: true },
    { field: 'action', header: 'Action', width: '90', sort: true }
  ];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService
      .getPosts()

      .subscribe(data => {
        this.filteredPost = data;
        this.posts = data;
      });
  }

  deleteRow(postId) {
    this.filteredPost = this.filteredPost.filter(post => post.id !== postId);
  }
  searchRecord(postForm) {
    const title = postForm.controls.title.value;
    if (title) {
      this.filteredPost = this.posts.filter(post =>
        post.title.includes(title.toLowerCase())
      );
    } else {
      this.filteredPost = this.posts;
    }
  }
  clicked(item) {
    // alert(item);
  }
}
