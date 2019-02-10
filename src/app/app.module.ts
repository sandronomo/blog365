import { PostsService } from './providers/posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routers/app-routing.module';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HeaderBlogComponent } from './header-blog/header-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostDetailComponent,
    HeaderBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
