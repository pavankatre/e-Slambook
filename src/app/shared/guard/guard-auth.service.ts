import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../service/auth.service";

@Injectable()
export class GuardAuthService {
    constructor(private authServ: AuthService) { }
    canActivate(activeRouteSnap: ActivatedRouteSnapshot, stateSnap: RouterStateSnapshot):Promise<boolean> | Observable<boolean> | boolean {
// return this.authServ.myObser.subscribe((val : any)=>{
//     console.log(val)
//            if(val){
//             return true
//            }else{
//             console.log('againe wrong way')
//             return false
//            }

//         })

        return this.authServ.checkAuthenticUser().then((val: any) => {
            if (val) {
                return true
            } else {
                console.log('You are not authorized to access this page');
                return false
            }
        })
    }
}