import { Subject } from "rxjs";


export class FriendsService {
private friendsList  : any=[];
rEmail : any;
// getDataFromUser(userData: any){
// this.friendsList.push(userData)
// console.log(this.friendsList)
// }
// showDataOnCard(){
//     return this.friendsList.slice()
// }
registerdEmail(email: any){
    this.rEmail=email
}
setRegisterEmailInForm(){
    return this.rEmail
}
}

