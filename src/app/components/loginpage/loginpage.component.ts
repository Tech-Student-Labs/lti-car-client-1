import { Component, OnInit } from '@angular/core';
import {FormGroup, NgModel, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  public loginGroup!: FormGroup;
  constructor(private loginService: LoginService,private fb: FormBuilder) { }

  public message: string = '';

  ngOnInit() {
    this.loginGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  LoginUser(): void
  {
    this.loginService.LoginUser(this.loginGroup?.value.email, this.loginGroup?.value.password).subscribe(data => {
      this.message = data;
      console.log(data);
    });
    console.log(this.loginGroup?.value);
  }

}
