import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public cap: string = '';
  public errorMsg: string = '';
  public successMsg: string = '';

  constructor() { }

  ngOnInit() {
    // this.ChangeText();
  }

  // ChangeText() {
  //   let captcha: string = '';
  //   let characters: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  //   let length: number = 6;

  //   for(let x = 0; x < length; x++)
  //   {
  //     let rnum = Math.floor(Math.random() * characters.length);
  //     captcha += characters.substring(rnum, rnum + 1);
  //   }
  //   this.cap = captcha;
  // }

  // Submit()
  // {
  //   var checkCaptcha: HTMLInputElement | null = document.querySelector('#checkCaptcha');
  //   var checkCaptchaText: string | undefined = checkCaptcha?.value;
  //   if(checkCaptchaText == this.cap) 
  //   {
  //     console.log('success');
  //     this.successMsg = "Captcha completed successfully";
  //     this.errorMsg = '';
  //   }
  //   else
  //   {
  //     console.log(checkCaptchaText + ' ' + this.cap);
  //     this.successMsg = '';
  //     this.errorMsg = 'Captcha failed, please try again.';
  //     this.ChangeText();
  //   }
  // }

}
