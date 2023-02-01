import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { HeaderComponent } from './header/header.component';
import { FriendsService } from './shared/friends.service';
import { SlambookComponent } from './slambook/slambook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { AuthService } from './shared/service/auth.service';
import { GuardAuthService } from './shared/guard/guard-auth.service';
import { GuardFriendsService } from './shared/guard/guard-friends.service';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    HeaderComponent,
    SlambookComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    FriendsService,
    AuthService,
    GuardAuthService,
    GuardFriendsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
