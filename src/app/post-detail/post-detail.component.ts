import { PostsService } from '../providers/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {
  post = [];
  comments = [];
  commentsLength: number;
  postsLength: number;
  showComments = false;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public postsService: PostsService
  ) { }

  triggerComments() {
    this.showComments = !this.showComments;
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postsService.post(id).then((post: any) => {
      this.post = post;
    }).catch((error) => {
      console.log(error);
    });

    this.postsService.posts().then((posts: any) => {
      this.postsLength = posts.length;
      console.log(this.postsLength)
    }).catch((error) => {
      console.log(error);
    });

    this.postsService.comments(id).then((comments: any) => {
      this.comments = comments;
      this.commentsLength = this.comments.length;
    }).catch((error) => {
      console.log(error);
    });
  }

}
