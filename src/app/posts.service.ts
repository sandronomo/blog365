import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public http: HttpClient) { }

  posts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('https://jsonplaceholder.typicode.com/posts', {})
        .subscribe(
          (result: any) => {
            resolve(result);
          },
          (error) => {
            console.error(error);
            reject(error);
          });

    });
  }
}
