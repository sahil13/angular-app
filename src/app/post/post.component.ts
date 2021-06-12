import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../common/posts.service';

import { map } from 'rxjs/operators';
import { Post } from '../common/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements AfterContentInit {
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

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    console.log('i am implemented', this.postsService.post$);
    this.posts = this.postsService.post$;
    this.fetchDropDownValues();
  }

  fetchDropDownValues() {
    this.postsService.fetchDropDownValues().subscribe(reposnse => {
      console.log('committee', reposnse[0]);
      console.log('department=', reposnse[1]);
    });
  }

  ngAfterContentInit() {
    console.log('post content init called');
  }

  deleteRow(postId) {
    this.filteredPost = this.filteredPost.filter(post => post.id !== postId);
  }
  searchRecord(postForm) {
    const title = postForm.controls.title.value;
    if (title) {
      // this.posts = this.postsService.post$.pipe(
      //   map((posts: Post[]) => posts.filter(post => post.title.includes(title)))
      // );
    }
  }
  clicked(item) {
    // alert(item);
  }
}
