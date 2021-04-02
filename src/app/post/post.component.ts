import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../common/posts.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postsService
      .getPosts()

      .subscribe(data => {
        this.posts = data;
      });
  }

  fetchPostById(id) {
    if (id) {
      this.posts = [this.posts.find(posts => posts.id === id)];
      console.log(this.posts);
    }
  }
}
