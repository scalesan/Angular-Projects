import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl:'user.component.html',
  styleUrls:['user.component.css']
})

export class UserComponent implements OnInit {
  //properties
  user: User;

  constructor(){

  }
  ngOnInit(){
    this.user = {
      firstName:'LaTasha',
      lastName: 'Jones',
      email: 'tasha@gmail.com',
      isActive: true,
      registered: new Date,
      hide: true
    }
  }
}

