import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-blog',
  templateUrl: './header-blog.component.html',
  styleUrls: ['./header-blog.component.sass']
})
export class HeaderBlogComponent implements OnInit {
  open = false;
  textMenu = 'MENU';
  constructor() { }

  openMenu() {
    this.open = !this.open;
    if (this.open === false) {
      this.textMenu =  'MENU';
    } else {
      this.textMenu =  'FECHAR';
    }
  }

  ngOnInit() {
  }

}
