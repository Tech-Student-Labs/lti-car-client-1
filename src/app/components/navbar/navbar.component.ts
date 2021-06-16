import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('');
    document.getElementById('login')!.style.display = "block";
    document.getElementById('signup')!.style.display = "block";
    document.getElementById('logout')!.style.display = "none";
  }
}
