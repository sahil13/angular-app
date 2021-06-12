import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private URL = 'https://jsonplaceholder.typicode.com/posts/';
  committee$;
  dept$;
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

  fetchDropDownValues() {
    this.committee$ = this.http.get('http://localhost/oshop/committee.php');
    this.dept$ = this.http.get('http://localhost/oshop/department.php');
    return forkJoin([this.committee$, this.dept$]);
  }

  constructor(private http: HttpClient) {
    // console.log('inside service', this.post$);
  }
}
