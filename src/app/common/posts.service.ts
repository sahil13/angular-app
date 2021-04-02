import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private URL = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) {}

  getPosts(): any {
    return this.http.get(this.URL);
  }
}
