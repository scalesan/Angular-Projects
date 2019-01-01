import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { User } from '../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()

export class UserService {
  users:User[];
  data: Observable<any>;
  apiURL = "http://localhost:8080/users";

  
  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
     return this.http.get<User[]>(this.apiURL)
  }

  addUser(user: User){
    // this.users.unshift(user);
    // //add to Local Storage
    // localStorage.setItem('users', JSON.stringify(this.users));
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  editUser(user: User){

  }

  deleteUser(user: User){

  }

}
