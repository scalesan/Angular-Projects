import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-user-form.component.html',
  styleUrls: ['./post-user-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newUser: EventEmitter<User> = new EventEmitter();
  @Output() UpdatedUser: EventEmitter<User> = new EventEmitter();
  @Input() currentUser: User;
  @Input() isEdit; boolean;

  constructor(private user: UserService ) { }
  users: User[]
  ngOnInit() {
  
  }
  addUser(firstName, lastName, email, id){
    if(!firstName || !lastName || !email){
      alert("Please add user");
      } else {
        this.user.saveUser({firstName, lastName, email, id} as User).subscribe(user => {
          this.newUser.emit(user);
        })
      }
    }

    updateUser(user){
      this.user.updateUser(this.currentUser).subscribe(this.newUser => { console.log(user);
      this.isEdit = false;
      this.UpdatedUser.emit(user)
      });
    }
  }
