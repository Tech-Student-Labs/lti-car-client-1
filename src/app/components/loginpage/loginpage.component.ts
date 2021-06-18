import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, NgModel, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { token } from 'src/app/models/TokenDTO';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public loginGroup!: FormGroup;
  constructor(private loginService: LoginService,private fb: FormBuilder, private router: Router, private userService: UserService) { }
  message:string = "";

  ngOnInit() {
    this.loginGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  LoginUser(): void
  {
    this.loginService.LoginUser(this.loginGroup.value.email, this.loginGroup.value.password).subscribe(
      (data:token)=>{
        localStorage.setItem('token',data.token);
        this.message = "Login Successful";
        this.router.navigateByUrl('');
        this.userService.updateUserStatus();
      },
      err =>{
      this.message = err.error.Message;
    });
  }

}
