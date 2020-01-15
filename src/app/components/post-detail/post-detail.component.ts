
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//services
import { PostService } from "./../../services/post.service";
import { Post } from './../../models/Post';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  post_id: number;

  date: string;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.post = {} as Post;
    this.post_id = this.route.snapshot.params.id;
  }

  ngOnInit() {

    this.postService.getPost(this.post_id).subscribe((item: Post) => {
      this.post = item;
    })
  }

  AddDate(date) {
    this.date = date;
  }

}
