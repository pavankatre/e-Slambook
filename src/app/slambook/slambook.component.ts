import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FriendsService } from '../shared/friends.service';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-slambook',
  templateUrl: './slambook.component.html',
  styleUrls: ['./slambook.component.css']
})
export class SlambookComponent implements OnInit {
  friendData : FormGroup |any;
  imgConvrt : any;
  imgSize :any;
  showMsg:boolean=false;
  hideForm: boolean=true;
  constructor( private fb :FormBuilder, private frenServ : FriendsService , private http : HttpClient, private router : Router,
    private authServ : AuthService) { }

  ngOnInit(): void {
    this.friendData=this.fb.group({
      uFName : this.fb.control('',Validators.required),
      uLName :this.fb.control(null,Validators.required),
      uICall : this.fb.control(null,Validators.required),
      uFirstMeet: this.fb.control('',Validators.required),
      uCallMe : this.fb.control('', Validators.required),
      uCNum : this.fb.control('', Validators.required),
      uAdrs : this.fb.control('',Validators.required),
      uBDate : this.fb.control('', Validators.required),
      uPhoto : this.fb.control('',Validators.required),
      uEmail : this.fb.control(this.frenServ.setRegisterEmailInForm(), Validators.required),
      uFavSong : this.fb.control('', Validators.required),
      uFavMovie : this.fb.control('', Validators.required),
      uMemMoment : this.fb.control('',Validators.required),
      uYouLike : this.fb.control('', Validators.required),
      uAdviceFor: this.fb.control('', Validators.required),
      uFeedback : this.fb.control ('', Validators.required)
    })
  }

  getImg(val :any){
    this.imgSize=val.target.files[0].size
    console.log(val.target.files[0].size)
    let reader = new FileReader();
    reader.readAsDataURL(val.target.files[0]);
    reader.onload= (img :  any)=>{
      console.log(img)
this.imgConvrt=img.target.result;
    }

    // getFile(event: any) {
    //   this.img = event.target.files[0]
    //   let reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);
    //   reader.onload = (ev:any) => {
    //     this.imgFile = ev.target.result;
    //   }

  }
  addFriendsData(){
console.log(this.friendData.value)
this.friendData.value.uPhoto=this.imgConvrt

// this.frenServ.getDataFromUser(this.friendData.value)
this.http.post('https://slambook-35b03-default-rtdb.firebaseio.com/userData.json', this.friendData.value).subscribe((val : any)=>{
console.log(val)
if(val){
this.showMsg=true
this.hideForm=false

setTimeout(()=>{
  this.authServ.successFullySubForm(true)
  this.router.navigate(['friends'])
},2000)
}else{
  this.showMsg=false
  this.hideForm=true
}
})
  }
}
