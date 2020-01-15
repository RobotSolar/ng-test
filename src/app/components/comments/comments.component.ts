import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//services
import { CommentService } from "./../../services/comment.service";

//models
import { Comment } from "./../../models/Comment";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];
  @Input() post: number;

  @Output() emitLastDate = new EventEmitter<any>();

  constructor(private commentService: CommentService) {
    this.comments = [];
  }

  ngOnInit() {
    this.commentService.getComments(this.post).subscribe((items: Comment[]) => {
      this.comments = items;
    });
  }

  sendDate() {
    let date = new Date().toDateString();  // Creo fecha para enviar ya que en el json recibido de comments no contiene ningun dato tipo fecha
    this.emitLastDate.emit(date);
  }

}
