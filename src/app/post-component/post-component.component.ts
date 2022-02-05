import { PostServicesService } from './../Services/post-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss'],
})
export class PostComponentComponent implements OnInit {
  constructor(private postService: PostServicesService) {}
  listPosts: any;
  ngOnInit(): void {
    this.postService.listPosts().subscribe((postData) => {
      this.listPosts = postData;
    });
  }
}
