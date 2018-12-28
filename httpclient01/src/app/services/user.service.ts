import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of'

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user:User[];
  constructor() { }

  private UserSource = new BehaviorSubject<User>({ firstName: null, lastName: null, email: null, id:null});

  selectedUser = this.UserSource.asObservable();

}
