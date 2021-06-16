import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public message: string = '';

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  SignupUser(email: string, username: string, password: string, firstName: string, lastName: string): void
  {
    this.signupService.SignupUser(email, username, password, firstName, lastName).subscribe(data => {
      this.message = data;
    });
  }
}
