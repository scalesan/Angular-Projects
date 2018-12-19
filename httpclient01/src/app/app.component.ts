import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpParams, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  user: User;

  users: Observable<any>;

  constructor(private http: HttpClient){

  }

  getUsers(){
    //let headers = new HttpHeaders().set('Authorization', 'auth-token');
    let params = new HttpParams();

    //this.posts = this.http.get(this.Root_URL + '/posts', { headers })
    // this.posts = this.http.get(this.Root_URL + '/posts', { params})

    this.users = this.http.get<User[]>('http://localhost:8080/users')
  }

  ngOnInit():void {

    let apiUrl: string = 'http://localhost:8080/users';
    this.users = this.http.get<User[]>(apiUrl);
    this.users.subscribe(
      response => console.log(response),
      err => console.log(err)
  )
  }
}
