import { CommentService } from './../Services/comment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  listComments: any;
  commentID: any;
  ngOnInit(): void {
    this.commentService.listComments().subscribe((commentData) => {
      this.listComments = commentData;
    });
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.commentID = params.get('id');
    });
  }
  goToPostsList() {
    this.router.navigate(['/Posts', { id: this.commentID }]);
  }
}
