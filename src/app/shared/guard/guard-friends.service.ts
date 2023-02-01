import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../service/auth.service";

 @Injectable()

 export class GuardFriendsService{
    constructor ( private AuthServ : AuthService){}
    canActivate(activeRouteSnap: ActivatedRouteSnapshot, stateSnap: RouterStateSnapshot):Promise<boolean> | Observable<boolean> | boolean {
       return this.AuthServ.checkRegisterdUser().then((val: any)=>{
        if(val){
            return true
        }else{
            console.log('register first')
            return false
        }
       })
    }
 }