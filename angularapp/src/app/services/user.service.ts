import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>

  constructor() {
    this.users = [
      {
        firstName:'LaTasha',
        lastName: 'Jones',
        email:'tasha@gmail.com', 
        isActive: true,
        registered: new Date('02/27/2018 02:35:01'),
        hide: true
      },
      {
        firstName:'Anthony',
        lastName: 'Scales',
        email: 'anthony@gmail.com',
        isActive: false,
        registered: new Date('08/10/2013 06:32:00'),
        hide: true
      },
      {
        firstName:'Wright',
        lastName: 'Wade',
        email:'wright@gmail.com',
        isActive: true,
        registered: new Date('07/05/1998 12:10:01'),
        hide: true
      }
    ];
   }

   getData(){
     this.data = new Observable(observer =>{
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000)
     });
     
     return this.data;
   }

   getUsers(): Observable<User[]> {
     return of(this.users);
   }

   addUser(user: User){
     this.users.unshift(user);
   }
}
