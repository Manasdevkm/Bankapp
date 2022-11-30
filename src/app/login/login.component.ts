import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//(3rd execute)
// class - collection of properties and function
// properties/variables

aim="Your Perfect Banking Partner";

account="Enter Your Account Here";

acno='';
pswd='';

// database
userDetails:any={
  1000:{acno:1000,username:"Manu",password:1000,balance:1000},
  1001:{acno:1000,username:"Arjun",password:1001,balance:1000},
  1002:{acno:1000,username:"Maya",password:1002,balance:1000},
}

// functions/methods -user defined functions //(4th execute)
  constructor() { } //(1st execute)
  // it automatically invokes when the object is created
  // object initialization

  ngOnInit(): void { //(2nd execute)
    // it is a life cycle hooks of angular
    // when the component is created at same time it will i  initialize or authorized
  }
  acnoChange(event:any)
  {
  console.log(event);
  this.acno=event.target.value;//1000
  console.log(this.acno);//1000
  
  }
  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);//1000
    

  }
  // login(){
  //   // alert('login clicked');
  //   var acno=this.acno;
  //   var pswd=this.pswd;
  //   var userDetails=this.userDetails;

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert('login successful');

  //     }
  //     else{
  //       alert('invalid password')
  //     }
  //   }
  //   else{
  //     alert('invalid userdetails')
  //   }
  // }
  login(a:any,p:any){
    // alert('login clicked');
    var acno=a.value;
    var pswd=p.value;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('login successful');

      }
      else{
        alert('invalid password')
      }
    }
    else{
      alert('invalid userdetails')
    }
  }
}
