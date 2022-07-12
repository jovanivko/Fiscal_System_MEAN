import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  
  @Input()username: string = ""
  @Input()password: string = ""
  
  login(){
    this.userService.login(this.username, this.password).subscribe((user:User)=>{
      if(user)alert("OK");
      else alert("Bad credentials");
    })
  }
}
