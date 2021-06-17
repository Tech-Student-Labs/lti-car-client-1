import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public message: string = '';
  public signupGroup!: FormGroup;

  constructor(private signupService: SignupService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signupGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });
  }

  SignupUser(): void
  {
    this.signupService.SignupUser(this.signupGroup.value.email, this.signupGroup.value.userName, this.signupGroup.value.password, 
    this.signupGroup.value.firstName, this.signupGroup.value.lastName).subscribe(
      (data:any) => {
        this.router.navigateByUrl('login');
    },
    err =>{
      this.message = err.error.text;
      if (this.message == "Succeeded"){
        this.router.navigateByUrl('login');
      }
    }
    );
  }
}
