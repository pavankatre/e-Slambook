import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { GuardAuthService } from './shared/guard/guard-auth.service';
import { GuardFriendsService } from './shared/guard/guard-friends.service';
import { SlambookComponent } from './slambook/slambook.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path :'' , component : UserComponent},
  {path : 'friends',canActivate:[GuardFriendsService] , component : FriendsComponent},
  {path : 'slambook', canActivate:[GuardAuthService] , component : SlambookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
