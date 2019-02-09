import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  posts = [];

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.posts().then((post: any) => {
      this.posts = post;
    }).catch(() => {
    });
  }

}
