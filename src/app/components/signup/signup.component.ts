import { Component, OnInit } from '@angular/core';
import { UserSignup } from 'src/app/models/user-signup';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: UserSignup = new UserSignup("", "", "", "", "");

  constructor(private service: SignupService) { }

  ngOnInit() {
  }

  SignupUser(user: UserSignup): void
  {
    this.service.SignupUser(user).subscribe(data => {
      this.user = data;
    });
  }
}
