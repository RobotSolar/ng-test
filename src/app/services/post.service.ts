import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  getPostList() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

}
