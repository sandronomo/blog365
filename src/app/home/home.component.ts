import { PostsService } from '../providers/posts.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {
  posts = [];
  p = 1;
  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;

  constructor(public postsService: PostsService) { }

  scrollTop() {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: 50
    });
  }

  ngOnInit() {
    this.postsService.posts().then((post: any) => {
      this.posts = post;
    }).catch(() => {
    });
  }

}
