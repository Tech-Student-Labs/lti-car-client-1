import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/user-login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public user: UserLogin = new UserLogin('uname', 'pword');

  constructor(private service: LoginService) { }

  ngOnInit() {
  }

  Login(user: UserLogin): void 
  {
    this.service.Login(user).subscribe(data => {
      this.user = data;
    });
  }

}
