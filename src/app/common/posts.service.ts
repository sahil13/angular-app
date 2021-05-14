import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private URL = 'https://jsonplaceholder.typicode.com/posts/';

  post$ = this.http.get<Post[]>(this.URL).pipe(
    map(data => {
      return data.map(
        product =>
          ({
            ...product,
            title: product.title + 'sss'
          } as Post)
      );
    })
  );

  constructor(private http: HttpClient) {
    // console.log('inside service', this.post$);
  }
}
