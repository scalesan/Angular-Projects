import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { User } from '../models/user';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class UserService {
  user: User;
  users:User[];
  apiURL = "http://localhost:8080/users";

  private UserSource = new BehaviorSubject<User>({id: null, firstName: null, lastName: null, email: null});
  selectedUser = this.UserSource.asObservable();


  constructor(private http: HttpClient) {
    this.users = [];
   }

  getUsers():Observable<User[]>{
     return this.http.get<User[]>(this.apiURL)
  }

  addUser(user:User){
     this.users.push(user);
    // //add to Local Storage
    // localStorage.setItem('users', JSON.stringify(this.users));
    // localStorage.setItem('users', JSON.stringify(this.users));
    //this.users.push(user);
  }

  updateUser(user: User){
    this.users.forEach((cur, index) => {
      if(user.id === cur.id){
        this.users.splice(index, 1);
      }
    });
    this.users.unshift(user);
    return this.users

  }

  saveUser(user: User){

  }

  deleteUser(user: User){

  }

}