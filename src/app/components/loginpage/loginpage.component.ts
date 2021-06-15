import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  public message: string = '';

  ngOnInit() {
  }

  LoginUser(username: string, password: string): void
  {
    this.loginService.LoginUser(username, password).subscribe(data => {
      this.message = data;
    });
  }
}
