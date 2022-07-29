import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  });

  doLogin(){
    console.log(this.loginForm.value)
  }
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
