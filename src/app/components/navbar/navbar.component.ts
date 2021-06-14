import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userLoggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  //TODO: give users the ability to signup, login and logout
  public LogIn(): void
  {
    console.log('login called');
  }

  public SignUp(): void
  {
    console.log('signup called');
  }

  public LogOut(): void
  {
    console.log('logout called');
  }

}
