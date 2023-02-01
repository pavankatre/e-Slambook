import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { FriendsService } from '../shared/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
userList: any;
list : any;
comandForCard =true;
comandForDetai =false;

  constructor( private frendServ : FriendsService , private router : Router, private http : HttpClient) { }

  ngOnInit(): void {
    // this.userList=this.frendServ.showDataOnCard()
    console.log(this.userList)
    this.http.get('https://slambook-35b03-default-rtdb.firebaseio.com/userData.json').pipe(map((val : any)=>{
      console.log(val)
      let cardlist=[]
      for(let list in val){
        cardlist.push({...val[list],id:list})
      }
      console.log(cardlist)
      this.userList=cardlist

    })).subscribe((info : any)=>{

    })
  }
  moreInfo(index : any){
    console.log(this.userList[index])
    this.list=this.userList[index]
    this.comandForDetai=!this.comandForDetai;
    this.comandForCard= !this.comandForCard;
  }
  backTOComp(){
    this.comandForDetai=!this.comandForDetai;
    this.comandForCard= !this.comandForCard;
  }

}
