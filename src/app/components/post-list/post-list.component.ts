import { Component, OnInit } from '@angular/core';

//services
import { PostService } from "./../../services/post.service"

//models
import { Post } from "./../../models/Post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) {
    this.posts = [];
  }

  ngOnInit() {
    this.postService.getPostList().subscribe((items: Post[]) => {
      this.posts = items.slice(0, 10);
    })
  }

}
