import { PostServicesService } from './../Services/post-services.service';
import { IComment } from './../Shared Classes and types/interfaces';
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
    private postServise: PostServicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  listComments: IComment[] = [];
  post: any;
  postId: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.postId = params.get('id');
    });
    this.getPost();
    this.getComment();
  }
  getPost() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.postServise.listSinPost(id).subscribe((post: any) => {
      this.post = post;
    });
  }

  getComment() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.postServise.getComments(id).subscribe((comment: any) => {
      this.listComments = comment;
    });
  }
  // Go Baack
  goToPostsList() {
    this.router.navigate(['/Posts', { id: this.postId }]);
  }
}
