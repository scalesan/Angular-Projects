import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { post } from 'selenium-webdriver/http';

const httpoptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class PostService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpoptions);
  }

  updatePost(post: Post): Observable<Post>{
    const url = `${this.postsUrl}/${post.id}`;

    return this.http.put<Post>(url, post, httpoptions);
  }

  getPost(id: number): Observable<Post>{
    const url = `${this.postsUrl}/${id}`;

    return this.http.get<Post>(url);
  }

  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, httpoptions);
  }
}

