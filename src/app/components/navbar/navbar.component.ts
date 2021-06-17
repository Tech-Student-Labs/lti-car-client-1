import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userLoggedIn: boolean;
  public userIsAdmin: boolean;

  constructor(private router: Router, private userService: UserService) {
    this.userLoggedIn = false;
    this.userIsAdmin = false;
  }

  ngOnInit(): void {
    this.userService.updateUserStatus();
    this.userService.getUserStatus().subscribe(data => {
      this.userLoggedIn = data;
    });
    this.userService.getAdminStatus().subscribe(data => {
      this.userIsAdmin = data;
    });
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('');
    this.userService.updateUserStatus();
  }
}
