import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from './models/post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly Root_URL = "http://localhost:8080/";

   // posts: Observable<Post[]>;
   posts: Observable<any>;
   newPost: Observable<any>;
 constructor(private http: HttpClient){
 }

 // getPosts(){
 //   this.posts = this.http.get(this.Root_URL + '/posts' )
 // }

 getPosts(){
  //  let headers = new HttpHeaders().set('Authorization', 'auth-token');
  //  let params = new HttpParams().set('userId', '1');
  let params = new HttpParams();

  //  this.posts = this.http.get(this.Root_URL + '/posts', { headers })
   this.posts = this.http.get(this.Root_URL + '/posts', { params})

   // this.posts = this.http.get<Post[]>(this.Root_URL + '/posts?userId=1')
 }

 createPost(){
   const data: Post = {
     id: 10,
     firstName: 'Anthony',
     lastName: "Scales",
     email: "scalesan@msu.edu",

   } 

   this.newPost = this.http.post<Post>(this.Root_URL + '/users', data)
   //.retry(3)
   //.catch(err => {console.log(err)
   //  return Observable.of(err)
   //})
    .map(post => post.firstName)
 }
}

