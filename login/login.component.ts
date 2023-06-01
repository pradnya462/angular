import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  signupusers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:''
  };
  loginObj:any={
    userName:'',
    password:''
  }
constructor(){}
ngOnInit():void{
  const localData=localStorage.getItem('signupUsers');
  if(localData!=null){
    this.signupusers=JSON.parse(localData);
  }
}

onLogin(){
  const isUserExist=this.signupusers.find(m=>m.userName==this.loginObj.userName && m.password==this.loginObj.password);
  if(isUserExist!=undefined){
    alert("User logged in successfully");
  }
  else{
    alert("Invalid details");
  }
}
}