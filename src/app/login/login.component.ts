import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder:FormBuilder, private router:Router, private auth:AuthService){
    if(localStorage.getItem("isLoggedIn")){
      this.router.navigate(['']);
    }
  }
  item:any = [];

  SignInForm = this.formBuilder.group({
    email: new FormControl('', Validators.required),
    password: new FormControl()
  });

  onSubmit():void{
    console.log(this.SignInForm.value);
    this.auth.getuser(this.SignInForm.value.email, this.SignInForm.value.password).subscribe((result)=>{
      console.warn("result is here",result);
      this.item = result;
  

      localStorage.setItem('Userid', this.item[0].id);
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('userName',this.item[0].name);
      location.reload();
    });
  }
}
