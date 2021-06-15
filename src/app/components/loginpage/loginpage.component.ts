import { Component, OnInit } from '@angular/core';
import {FormGroup, NgModel, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { token } from 'src/app/models/TokenDTO';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  public loginGroup!: FormGroup;
  constructor(private loginService: LoginService,private fb: FormBuilder) { }


  ngOnInit() {
    this.loginGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  LoginUser(): void
  {
    this.loginService.LoginUser(this.loginGroup?.value.email, this.loginGroup?.value.password).subscribe(
      (data:token)=>{
        localStorage.setItem('token',data.token);
        console.log("Login Successful");
      },
      err =>{
      console.log(err.error.Message);
    });

  }

}
