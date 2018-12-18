import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';
<<<<<<< HEAD
import { last } from "rxjs/operators";


=======
>>>>>>> 0c2ad2c930f500ff20c974f1ab7534421d972f06
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly Root_URL = 'https://jsonplaceholder.typicode.com';

  // posts: Observable<Post[]>;
    posts: Observable<any>;
    newPost: Observable<any>;
  constructor(private http: HttpClient){
  }

  // getPosts(){
  //   this.posts = this.http.get(this.Root_URL + '/posts' )
  // }

  getPosts(){
    let headers = new HttpHeaders().set('Authorization', 'auth-token');
    let params = new HttpParams().set('userId', '1');

<<<<<<< HEAD
    //this.posts = this.http.get(this.Root_URL + '/posts', { headers })
    // this.posts = this.http.get(this.Root_URL + '/posts', { params})

    this.posts = this.http.get<Post[]>(this.Root_URL + '/posts')
=======
    this.posts = this.http.get(this.Root_URL + '/posts', { headers })
    // this.posts = this.http.get(this.Root_URL + '/posts', { params})

    // this.posts = this.http.get<Post[]>(this.Root_URL + '/posts?userId=1')
>>>>>>> 0c2ad2c930f500ff20c974f1ab7534421d972f06
  }

  createPost(){
    const data: Post = {
      id: null,
      userId: 23,
<<<<<<< HEAD
      title: "Post that I added",
=======
      title: "Post I I added",
>>>>>>> 0c2ad2c930f500ff20c974f1ab7534421d972f06
      body: " Hey Buddy"
    } 

    this.newPost = this.http.post<Post>(this.Root_URL + '/stop', data)
    .retry(3)
    .catch(err => {console.log(err)
      return Observable.of(err)
    })
    // .map(post => post.title)
  }
}
