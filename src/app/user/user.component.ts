import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { FriendsService } from '../shared/friends.service';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userEmail: FormGroup | any;
  userEmailRegister: FormGroup | any;
  notRegester: boolean = false;
  ownerUsed: boolean = false;
  constructor(private fb: FormBuilder, private http: HttpClient, private authServ: AuthService, private router: Router, private friendServ: FriendsService) { }

  ngOnInit(): void {
    this.userEmail = this.fb.group({
      usrEmail: this.fb.control('', Validators.required)
    })
    this.userEmailRegister = this.fb.group({
      usrEmail: this.fb.control('', Validators.required)
    })
  }
  chechUser() {
    console.log(this.userEmail.value.usrEmail)
    // this.http.post('https://slambook-35b03-default-rtdb.firebaseio.com/user.json', this.userEmail.value).subscribe((sedEmai) => {
    //   console.log(sedEmai)
    // })
    // if(this.userEmail.value.usrEmail == 'pavankatre@gmail.com'){
    //   this.ownerUsed = true
    // }else{
    //   this.http.get('https://slambook-35b03-default-rtdb.firebaseio.com/user.json').pipe(map((val: any) => {
    //     console.log(val)

    //     const stdArr = [];
    //     for (let std in val) {
    //       stdArr.push({ ...val[std], id: std })
    //     }
    //     console.log(stdArr)
    //     // console.log(stdArr[1].usrEmail)

    //     for (let item of stdArr) {
    //       console.log(item.usrEmail)
    //       if (item.usrEmail == this.userEmail.value.usrEmail) {
    //         this.http.get('https://slambook-35b03-default-rtdb.firebaseio.com/userData.json').pipe(map((val: any) => {
    //           let oldUser = []
    //           for (let user in val) {
    //             oldUser.push({ ...val[user], id: user })
    //           }
    //           console.log(oldUser)
    //           for (let userMail of oldUser) {
    //             console.log(userMail.uEmail)
    //             if (userMail.uEmail == this.userEmail.value.usrEmail) {
    //               this.authServ.successFullySubForm(true)
    //               this.notRegester = false
    //               this.router.navigate(['friends'])
    //             } else {
    //               this.authServ.checkUser(true);
    //               this.notRegester = false
    //               if (this.userEmail.value.usrEmail == 'pavankatre@gmail.com') {
    //                 this.ownerUsed = true
    //               } else {
    //                 this.router.navigate(['slambook'])
    //                 this.friendServ.registerdEmail(this.userEmail.value.usrEmail)
    //               }
    //             }
    //           }
    //         })).subscribe((val: any) => {
    //         })
    //       } else {
    //           this.notRegester = true
    //           console.log('wrong get way')
    //       }
    //     }
    //   })).subscribe((email: any) => {
    //     console.log(email)
    //   })
    // }


    // if (this.userEmail.value.usrEmail == 'pavankatre@gmail.com') {
    //   this.ownerUsed = true
    // } else if (this.userEmail.value.usrEmail == !'pavankatre@gmail.com') {
    //   console.log('this not owenr')

    //   this.http.get('https://slambook-35b03-default-rtdb.firebaseio.com/user.json').pipe(map((val: any) => {


    //     console.log(val)


    //     const stdArr = [];
    //     for (let std in val) {
    //       stdArr.push({ ...val[std], id: std })
    //     }
    //     console.log(stdArr)
    //     // console.log(stdArr[1].usrEmail)

    //     for (let item of stdArr) {


    //       if (item.usrEmail == this.userEmail.value.usrEmail) {



    //         this.http.get('https://slambook-35b03-default-rtdb.firebaseio.com/userData.json').pipe(map((val: any) => {
    //           let oldUser = []
    //           for (let user in val) {
    //             oldUser.push({ ...val[user], id: user })
    //           }
    //           console.log(oldUser)
    //           for (let userMail of oldUser) {
    //             console.log(userMail.uEmail)
    //             if (userMail.uEmail == this.userEmail.value.usrEmail) {
    //               this.authServ.successFullySubForm(true)
    //               this.notRegester = false
    //               this.router.navigate(['friends'])

    //             } else {
    //               console.log('you are not Old user')
    //               this.authServ.checkUser(true);
    //               this.notRegester = false
    //               this.router.navigate(['slambook'])

    //             }
    //           }
    //         })).subscribe((val: any) => {

    //         })

    //       } else {
    //         console.log('you are not register user')
    //         this.notRegester = true

    //       }
    //     }


    //   })).subscribe((val: any) => {

    //   })

    // }
    // else{
    //   console.log('you are not register user')
    //         this.notRegester = true
    // }


    // this.http.get('https://slambook-35b03-default-rtdb.firebaseio.com/user.json').pipe(map((val: any) => {
    //   console.log(val)
    //   const stdArr = [];
    //   for (let std in val) {
    //     stdArr.push({ ...val[std], id: std })
    //   }
    //   console.log(stdArr)
    //   // console.log(stdArr[1].usrEmail)

    //   for (let item of stdArr) {


    //     if (item.usrEmail == this.userEmail.value.usrEmail) {
    //       if (this.userEmail.value.usrEmail == 'pavankatre@gmail.com') {
    //         this.ownerUsed = true
    //       } else {
    //         console.log('you are not owner')
    //         this.http.get('https://slambook-35b03-default-rtdb.firebaseio.com/userData.json').pipe(map((val: any) => {
    //           console.log(val)
    //           let oldUser = []
    //           for (let user in val) {
    //             oldUser.push({ ...val[user], id: user })
    //           }

    //           if (val == null) {
    //             console.log('null')
    //               this.authServ.checkUser(true);
    //               this.notRegester = false
    //               this.router.navigate(['slambook'])
    //               this.friendServ.registerdEmail(this.userEmail.value.usrEmail)
    //           } else {
    //             console.log('not nul')
    //             console.log(oldUser)
    //             for (let userMail of oldUser) {
    //               console.log(userMail.uEmail)
    //               if (userMail.uEmail == this.userEmail.value.usrEmail) {
    //                 this.authServ.successFullySubForm(true)
    //                 this.notRegester = false
    //                 this.router.navigate(['friends'])

    //               } else {
    //                 console.log('you are not Old user')
    //                 this.authServ.checkUser(true);
    //                 this.notRegester = false
    //                 this.router.navigate(['slambook'])
    //                 this.friendServ.registerdEmail(this.userEmail.value.usrEmail)
    //               }
    //             }
    //           }


    //         })).subscribe((val: any) => {

    //         })

    //       }

    //     } else {
    //       console.log('you are not register user')
    //       this.notRegester = true
    //     }

    //   }
    // })).subscribe(() => {

    // })








    if (this.userEmail.value.usrEmail == 'pavankatre@gmail.com') {
      console.log('your are owner')
      this.ownerUsed = true
    } else {
      console.log('your are user')
      this.http.get('https://slambook-35b03-default-rtdb.firebaseio.com/user.json').pipe(map((val: any) => {
        console.log(val)
        const stdArr = [];
        for (let std in val) {
          stdArr.push({ ...val[std], id: std })
        }
        console.log(stdArr)
        // console.log(stdArr[1].usrEmail)

        for (let item of stdArr) {


          if (item.usrEmail == this.userEmail.value.usrEmail) {

            console.log('you are register user')
            this.http.get('https://slambook-35b03-default-rtdb.firebaseio.com/userData.json').pipe(map((val: any) => {
              console.log(val)

              if (val == null) {
                console.log('data null')
                this.authServ.checkUser(true);
                this.notRegester = false
                this.router.navigate(['slambook'])
                this.friendServ.registerdEmail(this.userEmail.value.usrEmail)
              } else {
                let oldUser = []
                for (let user in val) {
                  oldUser.push({ ...val[user], id: user })
                }
                console.log('not nul')
                console.log(oldUser)
                for (let userMail of oldUser) {
                  console.log(userMail.uEmail)
                  if (userMail.uEmail == this.userEmail.value.usrEmail) {
                    this.authServ.successFullySubForm(true)
                    this.notRegester = false
                    this.router.navigate(['friends'])

                  } else {
                    console.log('you are not Old user')
                    this.authServ.checkUser(true);
                    this.notRegester = false
                    this.router.navigate(['slambook'])
                    this.friendServ.registerdEmail(this.userEmail.value.usrEmail)
                  }

                }
              }
            })).subscribe((val: any) => { })


          } else {
            console.log('you are not register user')
            this.notRegester = true

          }
        }

      })).subscribe(() => {

      })


    }


  }
  registerEmail() {
    console.log(this.userEmailRegister.value)
    this.http.post('https://slambook-35b03-default-rtdb.firebaseio.com/user.json', this.userEmailRegister.value).subscribe((sedEmai) => {
      console.log(sedEmai)
    })
  }

}
