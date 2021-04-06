import { Component, OnInit } from "@angular/core";
import { PostsService } from "../common/posts.service";
@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  posts;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService
      .getPosts()

      .subscribe(data => {
        this.posts = data;
      });
  }

  deleteRow(postId) {
    this.posts = this.posts.filter(post => post.id !== postId);
  }
  searchRecord(title) {
    if (title) {
      this.posts = this.posts.filter(post =>  (post.title).includes(title));
      console.log('==');
    } else {
      this.posts = this.postsService
        .getPosts()
        .subscribe(posts => (this.posts = posts));
    }
  }
}
