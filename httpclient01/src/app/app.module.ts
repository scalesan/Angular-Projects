import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { PostUserFormComponent } from './post-user-form/post-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserFormComponent,
    PostUserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
