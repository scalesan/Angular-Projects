import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
