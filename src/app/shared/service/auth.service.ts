import {  BehaviorSubject, Subject } from "rxjs";

export class AuthService{
private isLoggedIn: boolean = false;
private isRegistered : boolean= false;
myObser: any = new BehaviorSubject(this.isLoggedIn)
checkUser(val : any){
    this.isLoggedIn=val
}
successFullySubForm(val : any){
this.isRegistered=val
}
    checkAuthenticUser() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.isLoggedIn)
            } )
        })
    }

    checkRegisterdUser(){
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(this.isRegistered)
            })
        })
    }


}