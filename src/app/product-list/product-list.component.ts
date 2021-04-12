import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../common/posts.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  posts;
  postId;
  uniquePost;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  showPostDetail(id) {
    this.postId = id;
    this.uniquePost = this.posts.find(posts => posts.id === id);
  }
}
