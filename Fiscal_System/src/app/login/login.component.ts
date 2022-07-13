import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  
  @Input()username: string = ""
  @Input()password: string = ""
  message:string = ""
  
  login(){
    this.userService.login(this.username, this.password).subscribe((user:User)=>{
      if(user){
        if(user.type==1)this.router.navigate(["/user"]);
        else if(user.type==2)this.router.navigate(['/customer']);
        else this.router.navigate(['/admin'])
      }
      else this.message = "Bad credentials";
    })
  }
}
