import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder:FormBuilder){}


  SignInForm = this.formBuilder.group({
    email: new FormControl('', Validators.required),
    password: new FormControl()
  });

  onSubmit():void{
    console.log(this.SignInForm.value);
  }


}
