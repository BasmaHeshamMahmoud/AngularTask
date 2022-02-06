import { PostServicesService } from './../Services/post-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss'],
})
export class PostComponentComponent implements OnInit {
  constructor(
    private postService: PostServicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  listPosts: any;
  postId: any;
  ngOnInit(): void {
    this.postService.listPosts().subscribe((postData) => {
      this.listPosts = postData;
    });
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.postId = params.get('id');
    });
  }
  goToCommentsList(post: any) {
    this.router.navigate(['/Comments', post.id]);
  }
  isSelected(post: any) {
    return parseInt(post.id) === parseInt(this.postId);
  }
}
