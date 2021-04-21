import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../common/posts.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent
  implements OnInit, AfterViewInit, AfterContentInit {
  posts;
  postId;
  uniquePost;
  message = 'hello';
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    console.log('oninit called');
    this.posts = this.postsService.post$;
  }

 /*  ngDoCheck(changes: SimpleChanges): void {
    console.log('do check called');
  } */

  ngAfterContentInit() {
    console.log('Contentinit called');
  }

  ngAfterViewInit() {
    console.log('viewinit called');
  }

  showPostDetail(id) {
    this.postId = id;
    this.uniquePost = this.posts.find(posts => posts.id === id);
  }
}
