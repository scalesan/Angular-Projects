import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpParams, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  user: User;
  users: User[]
  

  constructor(private http: HttpClient, private userservice: UserService){

  }

    ngOnInit() {
    this.userservice.getUsers().subscribe(data => {
      console.log(data)
    })

    // let apiUrl: string = 'http://localhost:8080/users';
    // this.users = this.http.get<User[]>(apiUrl);
    // this.users.subscribe(
    //   response => console.log(response),
    //   err => console.log(err)
  // )
}



}
